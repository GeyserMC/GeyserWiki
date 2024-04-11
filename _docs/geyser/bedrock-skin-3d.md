# How to get a 3D render image of skin using GeyserMC API and Visage API
A simple tutorial to get 3D image render of bedrock skin

## Step 1
- You will need to fetch the API xuid by Xbox player username

https://api.geysermc.org/v2/xbox/xuid/USERNAME_HERE < username

example: https://api.geysermc.org/v2/xbox/xuid/nixybuilder

- The output will be a JSON code that will be similiar to this with xbox player XUID

/ json

    {
    "xuid": 2535447554706112
    }


## Step 2
- Copy the XUID from the JSON output and paste it in this link

https://api.geysermc.org/v2/skin/XUID_HERE < paste xuid here

example: https://api.geysermc.org/v2/skin/2535447554706112

- The output will be a JSON code that will be similiar to this with some few more additional info and the "texture_id" required to get the png file of skin

/ json

    {
    "hash": "4063896af19b94abc89a3348c31e66f6b701b9aec0a0574599009084bf7fc63b",
    "is_steve": false,
    "last_update": 1712693703278,
    "signature": "mlJxsG1PRpaslvi2aj5xXRCiizz/Lfomwj7GUEmpRiPKG/fAPhjYMHaf5Kc475A0oonSGssEcSQ32mOpzH8BzFoVNy4yC+GZpQmjPu79RV5NVPv7IeTrmUvT4MwnxrBe7dt9t2jUHcM0a9NDjnoHXqy6LJZj3QfGAoZlcW9zIOqtE7kqa6vhxf9Sen+KeJ4RluOFrTUXNUYJuxDX5XH0mkVLUA+rqNy8FUkq9RxIiOm4gO/qQKihe4jHLpvaZ2TSMc3sLKnExOH5h2iaQJMGSIUPPUJ0MsLefZEqpZRmdgLET6ZT6gcm6XoyXOwsQI+fLWC7lAMk7u78ZXPV8mM+BFJ4VEXYH8jSmJDzJKeIW5/J1EwDKejZc2jwSW2y63CoBQmDZFJ/iAL0aitPw9ig8KWoA1YUnJct0AtamUZS04rj3k6MdAq3+frYC3UPWTULWOP89iyvZIOOE9MgLEV7DeVGs2dbbbRHFmO9hcF3hX/AU4ytLwxdc8mCXzatQSQcr8z1Vw5f65ksOAIytOY6Vr4AUn4zXShYh2UziET3E6eGRJutDaqD1H9orGZTR7touc+D7STcMchueq8lHH3zHR6+iEflmOaHIUpA1D1yZk1vYD/pWlauMnguxe+N5OaCWtqFVYnFh0TrRo1ZdpzkjhdSYHv98a3LVx8+4PsS0oM=",
    "texture_id": "655ddd816a67fbe32b1baa5065dd632e4e02dfd8661cfc060ac30d0e35fa1d1a",
    "value": "ewogICJ0aW1lc3RhbXAiIDogMTY5NzkxNDI1NzMzMiwKICAicHJvZmlsZUlkIiA6ICJjN2FmMWNkNjNiNTE0Y2YzOGY4NWQ2ZDUxNzhjYThlNCIsCiAgInByb2ZpbGVOYW1lIiA6ICJtb25zdGVyZ2FtZXIzMTUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjU1ZGRkODE2YTY3ZmJlMzJiMWJhYTUwNjVkZDYzMmU0ZTAyZGZkODY2MWNmYzA2MGFjMzBkMGUzNWZhMWQxYSIsCiAgICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICAgIm1vZGVsIiA6ICJzbGltIgogICAgICB9CiAgICB9CiAgfQp9"
    }

## Step 3
- Copy the "texture_id" from JSON output and paste it in this link to get the png skin URL. By doing this, you can make sure its the correct skin and if there arent any typos
- You can skip this step if you straight want to get the 3d render
  
https://textures.minecraft.net/texture/TEXTURE_ID_HERE < paste texture id here

example: https://textures.minecraft.net/texture/655ddd816a67fbe32b1baa5065dd632e4e02dfd8661cfc060ac30d0e35fa1d1a

![image](https://github.com/GeyserMC/GeyserWiki/assets/145860929/4ad3c188-b821-4dd1-abe8-d9ef94a55bba)

Note: The skin texture doesnt update automatically, you will need to fetch the XUID again in step 2 if you want to update them manually. The old `texture_id` will still work.

# Step 4
- Use [Visage API](https://visage.surgeplay.com/index.html) to get the 3d png render of the skin

- In the Visage API to load bedrock skins you need to paste the `texture_id` instead of username that is for java only

https://visage.surgeplay.com/full/384/TEXTURE_ID_HERE  < paste texture id here

example [https://visage.surgeplay.com/full/384/4df623184c7325846c3e30394d86f669710db0c64d5a074a7557a1b4a44ebf7d?no=shadow&slim](https://visage.surgeplay.com/full/384/655ddd816a67fbe32b1baa5065dd632e4e02dfd8661cfc060ac30d0e35fa1d1a?no=shadow&slim)

![image](https://github.com/GeyserMC/GeyserWiki/assets/145860929/b709975b-dff5-4480-8631-0d44a66e3d0c)

( I used simple additional features in the Visage API to make the skin slim and show no shadow: ?no=shadow&slim )
