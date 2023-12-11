---
title: Supported languages & translations
---

Geyser supports a wide variety of languages to offer the best experience for players all over the globe.
When players join your server, Geyser will automatically detect their locale and provide the appropriate language.

## What languages are supported?
We aim to support any of the Bedrock languages - below is a list of them and all the language codes. 

|Name                        |Code |
|----------------------------|-----|
|Bulgarian                   |bg_bg|
|Czech                       |cs_cz|
|Danish                      |da_dk|
|German                      |de_de|
|Greek                       |el_gr|
|British English             |en_gb|
|American English            |en_us|
|Spanish                     |es_es|
|Mexican Spanish             |es_mx|
|Finnish                     |fi_fi|
|Canadian French             |fr_ca|
|French                      |fr_fr|
|Hungarian                   |hu_hu|
|Indonesian                  |id_id|
|Italian                     |it_it|
|Japanese                    |ja_jp|
|Korean                      |ko_kr|
|Dutch                       |nl_nl|
|Norwegian Bokmål            |nb_no|
|Polish                      |pl_pl|
|Brazilian Portuguese        |pt_br|
|Portuguese                  |pt_pt|
|Russian                     |ru_ru|
|Slovak                      |sk_sk|
|Swedish                     |sv_se|
|Turkish                     |tr_tr|
|Ukrainian                   |uk_ua|
|Chinese Simplified (China)  |zh_cn|
|Chinese Traditional (Taiwan)|zh_tw|

### Additional languages
These languages are also supported, and are available in the Bedrock client using [this](https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft) resource pack.

|Name                        |Code |
|----------------------------|-----|
|Afrikaans                   |af_za|
|Belarusian                  |be_by|
|Hebrew                      |he_il|
|Hindi                       |hi_in|

## How can I help translate Geyser?
We use [Crowdin](https://crowdin.com/project/geyser) to manage our translations.
We also can add support for more languages, and please request them in the Discord server if you are willing to translate them.
(Those can be enabled clientside via [https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft](https://www.curseforge.com/minecraft-bedrock/addons/translations-for-minecraft))

## Adding custom Geyser translation overrides
These strings are only for places where Geyser uses them. To edit Minecraft Java translations, see the section below.

To start, create a `languages` folder in the same directory as the Geyser config file.
Inside of it, you'll need to add a file with your desired locale ending in `.properties`. You can see
[here](https://github.com/GeyserMC/languages/tree/master/texts) for the locale files that Geyser uses - 
you can download these as a starting point, or you can just add the strings you want to overwrite. 

You must restart Geyser for the changes to apply.

## Modifying/Adding Minecraft Java translations
Geyser also downloads the Minecraft Java translations from Mojang's servers and sends them to Bedrock clients when needed.
To modify these, open the `overrides` subfolder in the `locales` folder. Then, place your modified `.json` files in the `overrides` folder.
You can also add custom Java translation strings to that json file.

Note: You do not need to provide the entire file, only the Java strings you want to change/add. Geyser will only update the strings you provide.
You must restart Geyser for the changes to apply.
