---
layout: page
title: Anti-Roll Bar System Design
description: CAD, FEA, and Hand Calculations
img: assets/img/arb_detail.png
importance: 1
category: Formula
---

Designed the rear anti-roll bar (ARB) system to meet specific roll stiffness targets while maintaining adjustability for track tuning.

### Design Features
* **Adjustable Geometry:** Implemented a 3-lever arm configuration. This allows the team to mechanically adjust the motion ratio and tune the car's handling balance.
* **Materials:** Selected **AISI 4130 steel** for the main torsion bar (5/8" OD, 0.028" wall) and welded blades to maximize fatigue life.
* **Mounting:** Designed custom **6061-T6 aluminum housings** with **Delrin bushings** to minimize friction and wear during operation.

### Validation
I validated the design using both analytical methods and Finite Element Analysis (FEA).
* **Hand Calculations:** Modeled torsion and bending moments using a spreadsheet calculator. Calculated a **Safety Factor (FOS) of 1.34** based on the material yield strength.
* **FEA Simulation:** Performed a Static Structural analysis in Ansys. The simulation verified the hand calculations with a comparable minimum **FOS of 1.58**.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arb_calc.jpg" title="Hand Calculations" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/arb_fea.png" title="Ansys FEA Result" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Analytical model calculating shear, bending moment, and FOS. Right: Ansys Static Structural analysis confirming the safety factor.
</div>