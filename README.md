# Smooth scroll

Since smooth scrolling is disabled by default in Chrome and other browsers, but sometimes smooth scrolling is needed.

### Arguments

| Argument            | Description                                                 | Default |
| ------------------- | ----------------------------------------------------------- | ------- |
| `targetElement`     | Target HTML Element. **Required**                           | null    |
| `scrollOffset`      | Optional offset from Target in pixels                       | 0       |
| `scrollStep`        | Optional step size in pixels for the Scroll instant jump    | 15      |
| `scrollDelay`       | Optional scroll delay in milliseconds between instant jumps | 15      |
| `scrollableElement` | Optional Scrollable HTML element                            | <html>  |

### Return

Returns a Javascript Promise.
