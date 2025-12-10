---
layout: page
title: MIT BWSI UAV-SAR System
description: Synthetic Aperture Radar & Kalman Filtering
img: assets/img/bwsi_drone.jpg
importance: 1
category: Misc
---

Developed an airborne **Synthetic Aperture Radar (SAR)** system capable of imaging ground targets using a UAV. This project integrated signal processing algorithms with real-time flight data.

### Technical Approach
* **Back-Projection Algorithm:** Implemented a "brute force" back-projection algorithm to solve for radar reflectivity ($\sigma(\vec{x})$). This involved integrating pulse data along the flight path to reconstruct the image of a target (a metal can) on the ground.
* **State Estimation:** Utilized **Kalman filtering** on data from an external Motion Capture (Mocap) system to precisely estimate the UAV's position. Accurate position history was critical for the coherent integration of radar signal overlap.
* **System Integration:** Established a **TCP communication protocol** to stream telemetry and radar data between the drone and the ground station for processing.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bwsi_algo.jpg" title="Algorithm Concept" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bwsi_result.jpg" title="Radar Back-Projection Result" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bwsi_mocap.jpg" title="Mocap Setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: The back-projection integral concept. Middle: Final radar image showing the target return after zooming in and processing data. Right: The MIT AeroAstro motion capture facility setup used for testing.
</div>