# Smooth scroll

Since smooth scrolling is disabled by default in Chrome and other browsers, but sometimes smooth scrolling is needed.

### Arguments

| Argument             | Description                                                 | Default |
| -------------------- | ----------------------------------------------------------- | ------- |
| `targetSelector`     | Target querySelector string. **Required**                   | null    |
| `scrollOffset`       | Optional offset from Target in pixels                       | 0       |
| `scrollableSelector` | Optional Scrollable element querySelector string            | "html"  |
| `scrollStep`         | Optional step size in pixels for the Scroll instant jump    | 15      |
| `scrollDelay`        | Optional scroll delay in milliseconds between instant jumps | 15      |

### Return

Returns a Javascript Promise.
