---
layout: page
title: DexCo Teleoperation System
description: Haptic Teleoperation & Control Loop
img: assets/img/5F9FD6C3-289E-4672-A211-2AA31387F3FB_1_105_c.jpeg  # Use the screenshot of your laptop/UI
importance: 1
category: MSC
related_publications: false
---
2025 October-Present
**Status:** Ongoing Project at Mechanical Systems Control (MSC) Lab, so more to come later!
This project is currently advised by advised by **Dr. Junda Huang, Dr.Jianshu Zhou and Professor Masayoshi Tomizuka**.

### Overview
I developed the electrical and software infrastructure to enable **teleoperation** of the [DexCo soft robotic hand](https://msc.berkeley.edu/research/mechatronics/dexco.html). The system maps human hand movements (captured via magnetic encoders) to a bank of syringe pumps that hydraulically actuate the robotic fingers.

### Contributions

#### 1. Embedded Firmware (ESP32 / C++)
I wrote the firmware for an **ESP32** microcontroller to manage low-level motor control and sensor acquisition.
* **Communication Protocol:** Designed a custom Serial ASCII protocol to handle high-frequency telemetry (40Hz) and command parsing (e.g., `p3`, `FOLLOW`, `PID` config).
* **Closed-Loop Control:** Implemented a **PID controller** on the microcontroller to regulate syringe position based on encoder feedback, ensuring the hydraulic pressure matches the operator's hand pose.
* **Sensor Integration:** Wrote I2C drivers to read **6x AS5600 magnetic encoders** using multiplexers to track joint angles.
* **Safety:** Implemented hard-coded safety limits (`SAFE_MIN` / `SAFE_MAX`) to prevent syringe over-extension and mechanical damage.

#### 2. Electrical Integration
* **PCB Interfacing:** Wired and integrated the ESP32 Feather V2 with a custom PCB and breadboard prototyping setup to drive the PWM motor controllers.
* **Signal Routing:** Managed I2C bus wiring (SDA/SCL) and PWM channel mapping for 6 degrees of freedom.

#### 3. Desktop Control Software (Python / PyQt5)
I built a comprehensive desktop dashboard to visualize system performance and control experiments.
* **Tech Stack:** Python, PyQt5 for the GUI, and `pyqtgraph` for high-performance real-time plotting.
* **Teleoperation Logic:** Implemented a **"Follow Mode" (Master/Slave)** where the software maps real-time encoder data to pump position setpoints, allowing for direct human-in-the-loop control.
* **Data Logging:** Integrated CSV logging for capturing pressure, position, and encoder angles for system analysis.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dexco_wiring.jpg" title="Breadboard Wiring" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dexco_ui.jpg" title="Python Control Dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Wiring the ESP32 to the motor drivers. Right: The custom Python dashboard visualizing pressure and position tracking.
</div>