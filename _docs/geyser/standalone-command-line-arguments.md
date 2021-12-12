---
layout: page
title: Standalone Command Line Arguments
permalink: /geyser/standalone-command-line-arguments/
---

# General command-line arguments

### `--config [file]`
**Alias: `-c`**

Points to an alternative config file to use.

### `--gui` / `--nogui`
**Alias: `gui` / `nogui`**

Forces GUI or non-GUI usage, depending on context.

# Overriding specific config values
Overriding a standard config option (e.g. `command-suggestions`):

`--command-suggestions=false`

Overriding a nested config option(e.g. the `remote` section with `address`):

`--remote.address=test.geysermc.org`
