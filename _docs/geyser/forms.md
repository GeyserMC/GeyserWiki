---
title: Forms and Cumulus
---

# What is Cumulus?

Bedrock Edition has a cool exclusive feature called Forms.<br>
Cumulus is the Forms API that we use in Geyser and Floodgate.<br>
The source code is available [here](https://github.com/GeyserMC/Cumulus). You can access the Cumulus API through the [Floodgate API](/floodgate/api/), or the [Geyser API](/geyser/api).

Bedrock knows three types of Forms:
* ModalForm
* SimpleForm
* CustomForm

We'll discuss them one by one starting with the easiest and ending with the least easy form type.<br>
After that, you get an overview of every single component.<br>
Then we'll talk about sending the form, receiving a response and doing advanced stuff.<br>

## ModalForm

While this is the easiest form type it's also the least customisable.<br>
You have a title, description (content) and two buttons.

![Example of a ModalForm](https://i.imgur.com/kMpMgOh.png)

Code used in the image:

```java
ModalForm.builder()
    .title("Title")
    .content("Content")
    .button1("Button 1")
    .button2("Button 2")
```

## SimpleForm

While this one is less easy than ModalForm is, it also has more customizability.<br>
It's still limited to a title, content and buttons, but these buttons can also have images and do not have a minimum and maximum of two.

![Example of a SimpleForm](https://i.imgur.com/3rj2OQ2.png)

Code used in the image:
```java
SimpleForm.builder()
    .title("Title")
    .content("Content")
    .button("Button without an image")
    .button("Button with URL image", FormImage.Type.URL, "https://github.com/GeyserMC.png?size=200")
    .button("Button with path image", FormImage.Type.PATH, "textures/i/glyph_world_template.png")
```

## CustomForm

While the CustomForm is the last one on our list (and thus the least easy one), it also has the greatest customizability.<br>
This form exists of a title, content and a list of different components e.g. label, slider and input.<br>
See [Components](https://github.com/GeyserMC/Cumulus/tree/master/src/main/java/org/geysermc/cumulus/component) for more information about every component you can use and in which form type.

![Example of a CustomForm](https://i.imgur.com/zHgxELm.png)

Code used in the image:

```java
CustomForm.builder()
    .title("Title")
    .dropdown("Text", "Option 1", "Option 2")
    .input("Input", "placeholder")
    .toggle("Toggle")
    .slider("Text", 0, 10, 1, 5)
```

## Sending a form

After you decided which form type you want to use and finished filling in the actual content, it's time to send the Form to the Bedrock player.<br>
You can do that by calling the API and send a form to the player's UUID and the form:
```java
FloodgateApi.getInstance().sendForm(uuid, form); // or #sendForm(uuid, formBuilder)
```
Or you can do it by using the Player's FloodgatePlayer instance:
```java
FloodgatePlayer player = FloodgateApi.getInstance().getPlayer(uuid);
player.sendForm(form); // or #sendForm(formBuilder)
```
So you can make and send forms in a pretty compact way by doing something like this:
```java
FloodgatePlayer player = FloodgateApi.getInstance().getPlayer(uuid);
...
player.sendForm(
    CustomForm.builder()
        .title("My cool title")
        .label("10/10 content")
);
```

## Receiving a response from the client

It's nice and all that we can send forms to a client, but we also want to be able to get a response from a client and being able to handle them.<br>
We can do that using one (or multiple) result handers. The most used result handlers are: `validResultHandler(BiConsumer<Form, ValidFormResponseResult> | Consumer<ValidFormResponseResult>)`, `invalidResultHandler`, `closedResultHandler` and `closedOrInvalidResultHandler`.<br>
Here follows an example that uses result handlers:
```java
CustomForm.builder()
    .title("geyser.auth.login.form.details.title")
    .label("geyser.auth.login.form.details.desc")
    .input("geyser.auth.login.form.details.email", "account@geysermc.org", "")
    .input("geyser.auth.login.form.details.pass", "123456", "")
    .closedOrInvalidResultHandler(() -> buildAndShowLoginDetailsWindow(session))
    .validResultHandler(response -> session.authenticate(response.next(), response.next())));
```

## Advanced stuff

The FormBuilder also has support for translating the data used in the builder.<br>
To add a translator, you can use the `translator(BiFunction<String, String, String>)` or the `translator(BiFunction<String, String, String>, String)` method:
```java
ModalForm form = ModalForm.builder()
    .translator(this::translate, userLanguage)
    .title("Title")
    .content("Content")
    .button1("translate.button1")
    .button2("translate.button2")
    .build();

public String translate(String key, String locale) {
    // this method will be called for every string, in this case, 4 times:
    // Title, Content, translate.button1, translate.button2
    // your own translate logic here
    // return the value that replaces the key
}
```
Or you can have the translate method directly in the FormBuilder instead of a separate method:
```java
ModalForm form = ModalForm.builder()
    .translator((key, unused) -> {
        // this method will be called for every string, in this case, 4 times:
        // Title, Content, translate.button1, translate.button2
        // since this isn't a separate method, you don't need the locale argument, so it's unused.
        // your own translate logic here
        // return the value that replaces the key
    })
    .title("Title")
    .content("Content")
    .button1("translate.button1")
    .button2("translate.button2")
    .build();
```
