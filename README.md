<div align="center">
  <h1>FOHS</h1>
  Front-of-house lobby-facing displays for live performances.
</div>

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

## Remote Configuration
The remote is accessible at the `/dashboard` endpoint. Please ensure your network is secured.

| Feature | Description |
| ------- | ----------- |
| Activate Splash | Activate the configured splash text and show name. |
| Go Live | Instruct OBS to activate the "Live" scene. |
| Start/Restart Intermission | Restart the active intermission timer. |
| End Intermission | End the active intermission and present the end of intermission splash. |
| Set Splash | Set the main splash screen text. Applied smoothly. |
| Timer Control | Adjust the intermission timer live. |
| Show Name | Change the universal show name. |
| Intermission Length | Set the intermission time used for executive buttons above. |
| Primary Color | Set the color used for large text. |
| Gradient Color | Set the color used in tandem with the primary color. |
| Secondary Color | Set the color used for secondary text. |
