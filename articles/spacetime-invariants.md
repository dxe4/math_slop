
# Spacetime Invariants: Special Relativity by Geometry

**Before reading.** Read [Vectors in the Plane](../books/precalculus/vectors-plane.md). Also read [Arrays, Linear Maps, and Shapes](../books/optimization-backprop-from-scratch/arrays-linear-maps-shapes.md) and [Physics Models Before Equations](physics-models-before-equations.md). These are preparation for the ideas used below.

Special relativity is sometimes presented as a collection of paradoxical formulas. A cleaner route begins with one geometric demand: inertial observers may disagree about coordinates, but they agree on a quadratic spacetime interval. From that invariant, time dilation, relativity of simultaneity, causal cones, and relativistic momentum fit into one structure.

## Events, observers, and assumptions

An *event* is an idealized occurrence with coordinates $(t,x,y,z)$ in an inertial frame. We assume:

- spacetime is homogeneous and space is isotropic over the region studied;
- inertial frames are related by linear transformations;
- light in vacuum has the same speed $c$ for every inertial observer;
- gravity and acceleration during measurements are negligible.

Time is measured in seconds, distance in metres, and $c$ in metres per second. Multiplying time by $c$ gives $ct$ in metres, allowing temporal and spatial coordinates in the same unit. This is a local model; curved spacetime belongs to general relativity.

For two events define

$$\Delta s^{2}=c^{2} \Delta t^{2}-\Delta x^{2}-\Delta y^{2}-\Delta z^{2}$$

The sign convention could be reversed without changing the physics, provided it is used consistently. Unlike Euclidean squared distance, $\Delta s^{2}$ may be positive, zero, or negative.

## Causal classification

- $\Delta s^{2}>0$ is timelike. A signal moving slower than light can connect the events, and some inertial frame places them at the same position.
- $\Delta s^{2}=0$ is null or lightlike. Only a light-speed signal connects them.
- $\Delta s^{2}<0$ is spacelike. Some frame makes the events simultaneous, but no signal with speed at most $c$ can connect them.

This classification is invariant. Observers can disagree about $\Delta t$ and $\Delta x$ individually without disagreeing about which event can influence another.

## Deriving the one-dimensional Lorentz transformation

Let frame $S'$ move at constant speed $v$ along the positive $x$ direction of frame $S$, with origins coincident at $t=t'=0$. Linearity and the path of the moving origin suggest

$$x'=A(x-vt)$$

Symmetry implies the inverse has the same form with $v$ replaced by $-v$. Requiring a light ray $x=ct$ also to satisfy $x'=ct'$, and preserving the interval, yields

$$x'=\gamma(x-vt)$$

$$t'=\gamma(t-vx/c^{2})$$

where

$$\gamma=1/\sqrt{1-v^{2}/c^{2}}$$

The expression requires $|v|<c$ for inertial frames connected by ordinary material clocks. A unit check on $vx/c^{2}$ gives $(m/s)m/(m^{2}/s^{2})=s$, as required.

To verify invariance, expand

$$c^{2}t'^{2}-x'^{2} = \gamma^{2}[c^{2}(t-vx/c^{2})^{2}-(x-vt)^{2}]$$

The cross terms cancel. The remaining factor is $\gamma^{2}(1-v^{2}/c^{2})(c^{2}t^{2}-x^{2})=c^{2}t^{2}-x^{2}$.

For speeds much smaller than $c$, $\gamma \approx 1+v^{2}/(2c^{2})$, $x' \approx x-vt$, and the time correction is tiny. Galilean mechanics is recovered as an approximation, not declared universally exact.

## Time dilation is an interval statement

Proper time $\Delta \tau$ is the time between two timelike events measured by a clock present at both events. In the clock's rest frame, $\Delta x'=0$, so

$$c^{2} \Delta \tau^{2}=\Delta s^{2}$$

If the clock moves at speed $v$ in $S$, then $\Delta x=v \Delta t$, giving

$$\Delta \tau=\Delta t \sqrt{1-v^{2}/c^{2}}=\Delta t/\gamma$$

Thus $S$ assigns a longer coordinate interval $\Delta t=\gamma \Delta \tau$ between the same ticks. This is not a statement that a mechanism inside the clock runs badly; any ideal clock records the same proper time along that worldline.

### Worked example: a fast probe

A probe moves at $v=0.8c$ relative to a station. Its onboard experiment lasts $\Delta \tau=15 \min$. Here

$$\gamma=1/\sqrt{1-0.8^{2}}=1/0.6=5/3$$

The station assigns $\Delta t=(5/3)(15 \min)=25 \min$. During that station time the probe travels

$$\Delta x=0.8c(1500 s)=1200 light-seconds$$

because 25 minutes is 1500 seconds. A light-second is the distance light travels in one second; the result is about $3.60 \times 10^{11} m$. The calculation assumes constant relative velocity during the interval.

## Simultaneity and length

If two spatially separated events are simultaneous in $S$, then $\Delta t=0$, but

$$\Delta t'=-\gamma v \Delta x/c^{2}$$

which is generally nonzero. There is no frame-independent simultaneity for separated events.

Length contraction must be defined with care. The length of a moving rod in $S$ is the separation of its endpoints measured at the *same $S$ time*. If its rest length is $L_{0}$, the result is $L=L_{0}/\gamma$. Mixing endpoint events that are simultaneous in different frames produces an invalid derivation.

## Velocity addition protects the causal cone

Differentiate the Lorentz transformation along a particle path with velocity $u=dx/dt$:

$$u'=(u-v)/(1-uv/c^{2})$$

If $u=c$, then $u'=c$. If both $|u|<c$ and $|v|<c$, the transformed velocity remains subluminal. For small speeds the denominator is approximately one, recovering $u' \approx u-v$.

Example: a drone inside the probe moves forward at $u'=0.6c$ relative to the probe, while the probe moves at $v=0.8c$ relative to the station. Solving the addition relation gives

$$u=(u'+v)/(1+u'v/c^{2})=(0.6+0.8)c/(1+0.48)=0.946\ldots c$$

not $1.4c$.

## Four-momentum and the energy invariant

For a particle of rest mass $m$, define relativistic energy and momentum

$E=\gamma m c^{2}$, $p=\gamma m v$.

They obey

$$E^{2}-p^{2}c^{2}=m^{2}c^{4}$$

At rest, $p=0$ and $E=mc^{2}$. For low speed, expanding gamma gives

$$E \approx mc^{2}+(1/2)mv^{2}+\ldots$$

The familiar Newtonian kinetic energy is the first motion-dependent correction to a much larger rest energy. For a massless particle, the invariant relation becomes $E=pc$; the formula $\gamma m$ should not be used by setting $m=0$ because that produces an indeterminate limit rather than a derivation.

## Accessible diagram description

Draw a vertical axis labelled $ct$ and a horizontal axis labelled $x$. Two diagonal lines $x=ct$ and $x=-ct$ form an X. Timelike directions lie inside the upper and lower cones; spacelike directions lie to the left and right. A moving clock is a straight line inside the upper cone, tilted from the vertical. Axes for its frame tilt toward the light lines but never cross them. All regions carry text labels and distinct hatch patterns, so color is unnecessary.

## Failure modes and interpretive cautions

- Applying $\gamma$ to an accelerating journey without integrating proper time along segments can hide the role of changed frames.
- “What an observer sees” mixes light-travel delay with coordinate assignment; correct for signal delay before discussing Lorentz effects.
- Length requires simultaneous endpoint events in the measuring frame.
- Coordinate time is not automatically the time recorded by a particular clock.
- Faster-than-light coordinate speeds can occur for a moving spot or distant convention, but they do not carry local information faster than light.
- Special relativity neglects gravity. It should not be used across regions where spacetime curvature is operationally important.

## Exercises

<a id="deep-dive-spacetime-invariants-ex-1"></a>

### Exercise 1

1. Classify event separations $(c \Delta t, \Delta x)=(5 m,3 m)$, $(4 m,4 m)$, and $(2 m,6 m)$.

<details>
<summary>Hint 1</summary>

Use the article’s sign convention: time-distance squared minus space-distance squared.
</details>

<details>
<summary>Hint 2</summary>

Compute the three interval signs separately and classify positive, zero and negative values.
</details>

<details>
<summary>Solution</summary>

The intervals are $25-9=16 m^{2}$ timelike, $16-16=0$ null, and $4-36=-32 m^{2}$ spacelike.

</details>

<a id="deep-dive-spacetime-invariants-ex-2"></a>

### Exercise 2

2. Find $\gamma$ for $v=0.6c$ and the station time corresponding to $8 s$ of proper time.

<details>
<summary>Hint 1</summary>

The Lorentz factor depends on the squared speed ratio.
</details>

<details>
<summary>Hint 2</summary>

Compute gamma at six-tenths c and multiply it by the stated proper time.
</details>

<details>
<summary>Solution</summary>

$\gamma=1/\sqrt{1-0.36}=1.25$; the station time is $10 s$.

</details>

### Further exercises

3. Two events are simultaneous in $S$, separated by $300 m$. Find $\Delta t'$ for $v=0.5c$, leaving the answer in terms of $c$, then estimate it using $c=3.00 \times 10^{8} m/s$.
4. Combine $u'=0.5c$ with frame speed $v=0.5c$.
5. A particle has $E=5mc^{2}/3$. Find $\gamma$ and $v/c$.

## Worked solutions


3. $\Delta t'=-\gamma v \Delta x/c^{2}$. With $\gamma=1/\sqrt{0.75} \approx 1.155$, this is $-1.155(0.5)(300)/c \approx -5.77 \times 10^{-7} s$. The sign says the event at larger $x$ occurs earlier in $S'$ under the stated orientation.
4. $u=(0.5+0.5)c/(1+0.25)=0.8c$.
5. Since $E=\gamma mc^{2}$, $\gamma=5/3$; then $v/c=\sqrt{1-1/\gamma^{2}}=\sqrt{1-9/25}=0.8$.

## Connections

This geometry builds on **linear maps** and **classical mechanics**. It leads to **electromagnetism**, where electric and magnetic fields mix between frames; **general relativity**, where the metric varies across spacetime; and **quantum field theory**, where Lorentz symmetry constrains particles and interactions. A useful next project is a spacetime-diagram calculator that always reports event pairs, units, interval sign, and the frame in which each measurement is simultaneous.
