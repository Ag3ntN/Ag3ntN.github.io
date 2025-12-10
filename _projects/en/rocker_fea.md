---
layout: page
title: Rocker Plate Optimization
description: Structural & Buckling Analysis
img: assets/img/rocker_cad.png
importance: 2
category: Formula
---

Optimized the suspension rocker plate geometry to reduce weight while ensuring structural integrity under high racing loads.

### Analysis & Results
* **Design:** Lightweight geometry modeled in CAD with optimized load paths for the pushrod and shock mounting points.
* **Static Structural FEA:** Validated the design under maximum load conditions. The rocker achieves a **Safety Factor (FOS) of 1.74**, ensuring no yielding occurs during cornering.
* **Buckling Analysis:** Conducted Eigenvalue Buckling analysis to prevent failure under compression. The design achieved a **Load Multiplier of 3.017**, indicating a buckling safety factor of ~3.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rocker_static.png" title="Static Structural FEA" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rocker_buckling.jpg" title="Buckling Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Static Structural FOS distribution. Right: Eigenvalue Buckling deformation mode showing the critical load multiplier.
</div>