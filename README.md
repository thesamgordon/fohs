<div align="center">
  <h1>FOHS</h1>
  Front-of-house lobby-facing displays for live performances.
</div>

FOHS runs a lobby display and a remote dashboard for controlling splash text,
intermission timing, and OBS scene changes during a show.

## Features

FOHS was built for theatres wanting a visual display placed in the lobby. In addition to supporting a live feed of the room, FOHS adds helpful audience information.

- Customizable splash screen for welcome/information
- Remote web address for control at any location (eg. via mobile device)
- Intermission timer
- Audible audience notifications for intermission progress reminders

## Example

Below are images of FOHS configured for the show _Ragtime_.

<img width="327.75" height="184" alt="image" src="https://github.com/user-attachments/assets/517a7a32-2985-4ab1-a077-1add783e4f57" />
<img width="327.75" height="184" alt="image" src="https://github.com/user-attachments/assets/a27ea0b6-233b-4ef9-a483-455cd0cc26c3" />
<img width="327.75" height="184" alt="image" src="https://github.com/user-attachments/assets/d4998f9d-3f01-494f-bda6-cddd9809e1a6" />

## Requirements

- macOS for the bundled `START.command` launcher and local network address discovery
- [Node.js](https://nodejs.org/)
- [Bun](https://bun.sh/) for dependency installation
- [OBS Studio](https://obsproject.com/) with the WebSocket server enabled
- Port 80 available on the show computer

## First-Time Setup

Install Bun if it is not already installed:

```sh
curl -fsSL https://bun.com/install | bash
bun --version
```

Open a new terminal window if `bun` is not found immediately after installing.

Clone the repository and install dependencies:

```sh
git clone https://github.com/thesamgordon/fohs
cd fohs
bun install
```

Create a local environment file:

```sh
cp .env.example .env
```

Then edit `.env` and set the OBS WebSocket password:

| Variable | Description |
| --- | --- |
| `OBS_PASSWORD` | Password from OBS WebSocket settings. In OBS, open `Tools` > `obs-websocket Settings`, enable authentication, then copy the password from the connection info or set a new one there. |

## OBS Setup

FOHS includes an OBS scene collection template at `obs.json`. To load it:

1. Open OBS.
2. Choose `Scene Collection` > `Import`.
3. Click `Add` and select this project's `obs.json` file.
4. Click `Import`.
5. Choose the imported `FOHS Preset` scene collection from the `Scene Collection` menu.

The template creates the scene and source names FOHS expects:

- A scene named `Browser View` for the lobby display
- A scene named `Feed` for the live camera/feed view
- A browser source named `Browser`

In OBS, open `Tools` > `obs-websocket Settings`, enable the WebSocket server,
and make sure the server port is `4455`. Keep authentication enabled and use the
same password in `.env`.

The template's `Browser` source starts with `http://localhost/display`. After
running FOHS, update that browser source to the display URL printed by the
launcher. The URL usually looks like `http://<computer-name>.local/display`.

The template also includes a placeholder example image source. Replace or remove
that source when configuring the actual live feed.

## Run the Show

Double-click `START.command`, or run:

```sh
node start-show.mjs
```

The launcher will:

- rebuild the app when source files have changed
- start FOHS on port 80
- open OBS if it is not already running
- print the lobby display URL and remote dashboard URL
- refresh the OBS browser source after the server starts

Use the printed display URL on the lobby display and the printed remote URL on
the device controlling the show.

## Remote Configuration

The remote is accessible at the `/dashboard` endpoint. Please ensure your network is secured.

| Feature | Description |
| ------- | ----------- |
| Activate Splash | Activate the configured splash text and show name. |
| Go Live | Instruct OBS to activate the `Feed` scene. |
| Start/Restart Intermission | Restart the active intermission timer. |
| End Intermission | End the active intermission and present the end of intermission splash. |
| Set Splash | Set the main splash screen text. Applied smoothly. |
| Timer Control | Adjust the intermission timer live. |
| Show Name | Change the universal show name. |
| Intermission Length | Set the intermission time used for executive buttons above. |
| Primary Color | Set the color used for large text. |
| Gradient Color | Set the color used in tandem with the primary color. |
| Secondary Color | Set the color used for secondary text. |

The dashboard saves show settings to `config.json`. That file is local to each
show computer and is intentionally ignored by git.
