
# Relativistic Mechanics

Lorentz transformations change the relation between velocity, momentum and energy. Newtonian momentum cannot simply be retained while every coordinate is transformed relativistically. A consistent particle dynamics uses four-vectors, an invariant rest mass and an action whose low-speed limit recovers familiar mechanics.

We first consider massive point particles of constant positive rest mass in prescribed smooth external fields. Their own singular electromagnetic fields are excluded from the force used here. When a charged particle accelerates, ignoring radiation reaction is a test-particle approximation, not an exact solution of the complete self-interacting point-charge problem. Massless momentum, composite systems and changing rest mass are treated separately rather than inserted into formulas with incompatible assumptions.

## Four-velocity and four-momentum

For a future timelike worldline, differentiate spacetime position with respect to proper time. The resulting four-velocity and its invariant norm are

$$u^\mu=\gamma(c,v),\qquad u_\mu u^\mu=c^2.$$

The temporal component is positive. The factor follows from the proper-time relation already derived, so four-velocity transforms as a spacetime vector even though the ordinary three-velocity follows a fractional transformation law.

For rest mass $m>0$, define four-momentum by multiplying four-velocity by that invariant scalar. Its temporal component is energy divided by light speed, and its spatial part is ordinary relativistic momentum:

$$p^\mu=(E/c,\mathbf p),\qquad E=\gamma mc^2,\qquad \mathbf p=\gamma mv.$$

The invariant mass-shell relation is

$$E^2-c^2|\mathbf p|^2=m^2c^4,\qquad E>0.$$

The positive energy branch is chosen for the future-directed classical particles in this book. The equation alone has another algebraic branch; selecting it is part of the physical model, not a consequence of squaring an expression.

Momentum divided by energy gives velocity through $v=c^2\mathbf p/E$. This relation is especially useful when conservation laws determine momenta more directly than trajectories. It also makes the subluminal character of a massive particle explicit from the positive mass-shell gap.

## Derive energy and momentum from an action

The free massive-particle action is negative rest energy times accumulated proper time. In an inertial coordinate-time parameter it has Lagrangian

$$L_0=-mc^2\sqrt{1-|v|^2/c^2}.$$

This action is Lorentz invariant because proper time is invariant. Differentiating the Lagrangian with respect to each velocity component gives momentum equal to mass times the normalization factor times velocity. The Legendre expression of momentum dotted with velocity minus Lagrangian then simplifies to the stated relativistic energy.

This derivation identifies which quantities are canonically conjugate in the free theory. It also explains the Newtonian limit. Expanding the square root gives a constant negative rest energy plus the ordinary kinetic Lagrangian and higher even velocity corrections. Removing that constant does not change the equations of motion for a fixed-mass particle, but rest energy must be retained when comparing systems whose invariant masses change.

Add the electromagnetic coupling in our physical potential convention:

$$L=L_0+qv\cdot A-q\phi.$$

Canonical momentum is then mechanical momentum plus charge times vector potential. The canonical Hamiltonian is mechanical relativistic energy plus charge times scalar potential. Mechanical momentum and energy remain the components of the kinetic four-momentum; they should not be relabeled as the canonical quantities when potentials are present.

To derive the force, differentiate the canonical momentum in time and compare with the coordinate derivative of the Lagrangian. The latter contains charge times velocity contracted with the spatial derivative of vector potential, minus charge times the scalar gradient. Subtract the total derivative of vector potential already present in canonical momentum. The remaining antisymmetric spatial derivative is velocity crossed with magnetic field, giving

$$\frac{d\mathbf p}{dt}=q(E+v\times B).$$

This derivation proves that the same Lorentz force holds with relativistic mechanical momentum. It is not the assertion that force still equals rest mass times ordinary acceleration at every speed.

## Work, force and acceleration

Differentiate the positive mass-shell energy as a function of momentum. Its momentum gradient is velocity, so energy rate is velocity dotted with momentum rate. The force law therefore gives

$$\frac{dE}{dt}=qv\cdot E.$$

The magnetic term does no instantaneous kinetic work. An external electric field changes energy even when its potential representation is time dependent; the physical work rate is gauge invariant. Conservation of a canonical Hamiltonian additionally requires the appropriate time-translation conditions on the chosen Lagrangian, or a corrected Noether statement when the symmetry changes it by a total derivative.

For constant rest mass, differentiating momentum gives

$$F=m\gamma a+m\gamma^3(v\cdot a)v/c^2.$$

Resolve acceleration into parts parallel and perpendicular to nonzero velocity. The corresponding force components are $m\gamma^3a_\parallel$ and $m\gamma a_\perp$. At zero velocity the formula reduces continuously to the ordinary rest-mass relation. The directional difference does not mean two independent invariant masses exist; it is a property of expressing one four-dimensional law in a chosen time coordinate.

Four-force is proper-time derivative of four-momentum. Its components can be written

$$f^\mu=\gamma(F\cdot v/c,F).$$

For constant mass it is orthogonal to four-velocity. Differentiate the fixed four-velocity norm to see the orthogonality of four-acceleration, then multiply by mass. If rest mass changes, this conclusion changes: the velocity contraction of four-force equals squared light speed times the rest-mass proper-time derivative. The assumption cannot be dropped in a rocket or an internally heated effective-body model.

## Worked example: constant proper acceleration

Consider one-dimensional motion starting from rest, with constant proper acceleration magnitude $\alpha>0$. Write four-velocity using rapidity. Four-acceleration norm then gives rapidity derivative with respect to proper time equal to proper acceleration divided by light speed. Integration makes rapidity grow linearly with proper time.

Integrating the velocity components yields

$$t=\frac c\alpha\sinh(\alpha\tau/c),\qquad
x=\frac{c^2}\alpha\bigl(\cosh(\alpha\tau/c)-1\bigr).$$

The worldline lies on a shifted hyperbola. Its ordinary speed is light speed times the hyperbolic tangent of rapidity, remaining below the limit for every finite proper time. Ordinary acceleration decreases as the inverse cube of the normalization factor, even though proper acceleration stays constant.

In a prescribed uniform electric field parallel to the motion, constant signed electric force gives precisely constant proper acceleration magnitude equal to charge-field magnitude divided by rest mass. That statement neglects radiation reaction and assumes the external field is maintained. It does not assert that an accelerating charge's complete self-field supplies no radiation energy or that the external apparatus has no energy cost.

The same coordinate trajectory can be expressed through electric work: starting from rest, its kinetic energy equals force times displacement. Solving that relation gives the speed as a function of position and agrees with the hyperbolic solution after eliminating proper time. The two methods compare a geometric acceleration description with an energy balance of the same test-particle model.

## Momentum of a complete system

For an isolated system, add all relevant four-momenta, including radiation and fields when they exchange momentum with the particles. Conservation means the total four-vector is unchanged between appropriate complete system states. Particle momenta alone need not be conserved in an externally driven field or while electromagnetic momentum is changing.

The total invariant mass is defined by

$$M^2c^4=E_{\mathrm{tot}}^2-c^2|P_{\mathrm{tot}}|^2.$$

It is not generally the sum of constituent rest masses. In the center-of-momentum frame it is total energy divided by squared light speed and includes internal kinetic energy, heat and binding contributions according to the model. A system can gain invariant mass when ordered motion becomes internal energy without losing total energy.

For a future timelike total momentum, the center-of-momentum frame moves at velocity $c^2P_{\mathrm{tot}}/E_{\mathrm{tot}}$. Its magnitude is below light speed by the mass-shell inequality. If the total momentum is null, as for perfectly collinear ideal massless particles, no finite center-of-momentum rest frame exists. One must examine the total invariant rather than assume every collection admits such a frame.

## Worked example: a completely inelastic collision

Two particles have equal rest mass. In the laboratory one moves at three fifths of light speed and the other is at rest. They combine into one isolated composite body, retaining the relative kinetic energy as internal energy. The incoming total energy is nine fourths of one particle's rest energy, and total momentum is three fourths of its mass times light speed.

The outgoing center velocity is therefore one third of light speed. The composite invariant mass is

$$M=\frac3{\sqrt2}m>2m.$$

This follows by subtracting squared total momentum times squared light speed from squared total energy. Its excess over the sum of the original rest masses is retained internal energy in the composite rest frame. It is not energy that disappeared during an inelastic collision.

The composite's laboratory normalization factor is three divided by the square root of eight. Multiplying it by the derived rest mass recovers the incoming total energy and momentum, checking both conservation equations. Assuming the final rest mass were exactly twice the original mass would fail those simultaneous constraints unless an additional radiation or external-energy channel were included.

The example uses an effective composite-body description. Its internal dynamics are not specified, but isolation and four-momentum conservation fix the stated kinematics. They do not prove a microscopic sticking probability or a particular thermalization mechanism.

## Massless energy and a scattering example

A future massless momentum satisfies positive energy equal to light speed times momentum magnitude. It has no timelike proper-time parametrization, so the massive formula of rest mass times four-velocity cannot be used by simply setting mass to zero. A massless trajectory can instead use another affine parameter, with momentum supplied as its independent null vector.

For a unidirectional classical wave, the field momentum density derived earlier gives energy divided by light speed as forward momentum. A photon model uses the same null kinematics. Connecting photon energy to frequency adds the quantum relation involving Planck's constant; it is an additional physical input, not a derivation from classical Maxwell equations alone.

## Worked example: Compton kinematics

An incoming photon of energy $E$ scatters from a free particle of rest mass $m$ initially at rest. The outgoing photon has energy $E'$ and angle $\theta$ relative to its original direction. Assume an isolated two-body final state with the same target rest mass and no extra emitted particles. Four-momentum conservation and the outgoing target mass shell give

$$\frac1{E'}-\frac1E=\frac{1-\cos\theta}{mc^2}.$$

To derive it, call the initial target four-momentum its rest vector and the two photon momenta null vectors. Square the target's final momentum, written as initial target plus incoming photon minus outgoing photon. The target norm cancels its unchanged final norm. The two remaining target-photon products are mass times their respective photon energies, while the photon cross product is their energy product times one minus angular cosine divided by squared light speed. Rearrangement gives the displayed relation.

Forward scattering leaves photon energy unchanged. Backward scattering gives the largest energy decrease at fixed incoming energy. The outgoing energy remains positive for every allowed angle. The recoil particle receives the difference and the balancing momentum; no ordinary low-speed recoil approximation was used.

If the photon energy-frequency relation is additionally assumed, the equation becomes the familiar wavelength shift $\lambda'-\lambda=h(1-\cos\theta)/(mc)$. The kinematic derivation does not supply the scattering rate or polarization dependence, which require interaction dynamics. It also presumes a free initial target, not a bound electron with unaccounted binding and recoil channels.

## Magnetic trajectories and their approximation

In a prescribed uniform magnetic field with no electric field, energy is constant. The momentum component parallel to the field is constant, while the perpendicular momentum rotates. The laboratory angular frequency is charge-field magnitude divided by the product of normalization factor and rest mass. The radius is perpendicular momentum divided by charge-field magnitude.

A particle with both components follows a helix. Increasing energy at fixed magnetic induction decreases the cyclotron frequency and increases the radius for the relevant transverse momentum. The Newtonian formulas are recovered when the normalization factor approaches one. Actual accelerated charges radiate, so an undriven long-lived orbit need not retain exactly constant energy once back reaction is included. The stated trajectory is the external-field approximation whose accuracy depends on radiative loss over the timescale considered.

## Gauge and canonical quantities

Under the physical gauge transformation, the coupled Lagrangian changes by charge times the total time derivative of the gauge function. Fixed-endpoint variations therefore give the same equations. Canonical momentum changes by charge times its spatial gradient, and canonical Hamiltonian changes by negative charge times its time derivative.

Mechanical momentum, kinetic energy and the physical Lorentz force remain unchanged. This is why a gauge-dependent canonical quantity cannot be substituted into a mass-shell relation without the matching potential correction. The later variational chapter returns to the distinction when discussing symmetry, boundary terms and electromagnetic field action.

## Exercises

### Exercise 1: the low-speed expansion {#em-mechanics-low-speed-expansion}

Expand relativistic energy through fourth order in speed divided by light speed, and momentum through its first relativistic correction. Explain when subtracting rest energy is harmless and when it is not.

**Hint 1.** Use the binomial expansion of the inverse square root near zero.

**Hint 2.** The rest-energy term is constant only within the fixed-mass model.

**Solution.** Energy is rest energy plus one half mass times squared speed plus three eighths mass times fourth power of speed divided by squared light speed, with sixth-order remainder in the dimensionless speed. Momentum is mass times velocity multiplied by one plus half normalized speed squared, with higher-order corrections. A constant rest-energy subtraction changes neither force nor a fixed-mass particle's action variation. In reactions, composites or internal-energy changes, the relevant invariant masses can differ between states, so dropping their rest energies would erase a real conservation contribution. The series also requires small speed ratio; it is not a uniformly accurate approximation near light speed.

### Exercise 2: recover velocity from momentum {#em-mechanics-momentum-to-velocity}

A massive particle has momentum magnitude $3mc/4$. Find its energy, speed and kinetic energy, taking the positive mass-shell branch.

**Hint 1.** Divide the mass-shell equation by squared rest energy.

**Hint 2.** Use speed equal to squared light speed times momentum divided by energy.

**Solution.** The energy normalization satisfies its square equal to one plus nine sixteenths, giving five fourths on the positive branch. Thus energy is five fourths of rest energy. The speed ratio is the momentum ratio three fourths divided by five fourths, namely three fifths. Kinetic energy is one fourth of rest energy. The negative square root would not represent the future-directed classical particle assumed here. Using ordinary momentum equal to mass times speed would incorrectly return three fourths of light speed for these data.

### Exercise 3: work in a static electric potential {#em-mechanics-static-electric-work}

A constant-mass particle moves in time-independent electromagnetic potentials. Derive conservation of mechanical relativistic energy plus charge times scalar potential. Explain why the magnetic field does not add another kinetic-work term.

**Hint 1.** Combine the electric work equation with the chain rule along the trajectory.

**Hint 2.** For static potentials, electric field is the negative scalar gradient.

**Solution.** Mechanical energy rate is charge times velocity dotted with electric field. Static potentials make this negative charge times the trajectory derivative of scalar potential, so their sum is constant. The magnetic Lorentz force has zero velocity dot product and contributes no separate kinetic work. A gauge choice with explicit time dependence may change the canonical Hamiltonian's appearance, while the physical trajectory and mechanical work law remain the same. The conserved expression is tied to the actual static symmetry and the stated representation; one should not infer that every gauge-dependent Hamiltonian must be numerically constant in an arbitrary time-dependent gauge.

### Exercise 4: force components {#em-mechanics-force-acceleration-components}

Starting from relativistic momentum, derive the parallel and perpendicular force-acceleration relations for a constant-mass particle at nonzero speed. Explain their common rest limit.

**Hint 1.** Differentiate the normalization factor using velocity dotted with acceleration.

**Hint 2.** Separate the acceleration into its velocity-parallel component and its orthogonal remainder.

**Solution.** The normalization derivative is its cube times velocity dotted with acceleration divided by squared light speed. Differentiating momentum therefore gives the general expression stated in the chapter. The orthogonal component receives only the first term, giving mass times normalization times transverse acceleration. The parallel coefficient combines the two terms and simplifies to mass times the cube of normalization. As speed tends to zero both coefficients tend to rest mass, recovering the same ordinary acceleration law in every direction. They are coordinate-time relations, not two different invariant definitions of mass.

### Exercise 5: a magnetic helix {#em-mechanics-magnetic-helix}

A particle with nonzero charge moves in a prescribed uniform magnetic field of magnitude $B>0$, with no electric field. Derive the helical radius and laboratory period in terms of its perpendicular momentum and normalization factor. State the radiative qualification.

**Hint 1.** Energy is constant and the momentum rotates without changing magnitude.

**Hint 2.** In the transverse plane, divide the force rotation rate by the momentum magnitude.

**Solution.** The transverse momentum rotation rate is charge-field magnitude divided by normalization times rest mass. Thus radius is perpendicular momentum divided by charge-field magnitude, and period is two pi normalization times rest mass divided by charge-field magnitude. The parallel velocity remains constant, giving a helix unless one component vanishes. Charge sign sets the rotation sense, while the positive magnitudes set radius and period. The calculation neglects radiation reaction and assumes the external field is prescribed. Significant accumulated radiative loss changes normalization and radius, so the exact constant-energy orbit is not a complete self-interacting accelerated-charge solution.

### Exercise 6: variable rest mass {#em-mechanics-variable-mass-four-force}

For a timelike effective body with rest mass varying along its worldline, derive the contraction of four-force with four-velocity. Explain why setting that contraction to zero would add a physical restriction.

**Hint 1.** Differentiate four-momentum as the product of mass and four-velocity.

**Hint 2.** Four-velocity contracted with its derivative vanishes, but its squared norm is nonzero.

**Solution.** Four-force has one term from the mass derivative times four-velocity and another from mass times four-acceleration. Contracting with four-velocity removes the latter by differentiated norm preservation and leaves squared light speed times the rest-mass proper-time derivative. Therefore orthogonal four-force is equivalent here to constant rest mass. Heating, emission, accretion or an effective subsystem exchanging internal energy can violate that constant-mass condition while retaining an appropriate complete-system conservation law. One must include the exchanged energy and momentum rather than reusing the constant-mass force identity unaltered.

### Exercise 7: invariant mass of two light quanta {#em-mechanics-two-null-momenta}

Two equal-energy future massless particles move in opposite directions. Find their total invariant mass. Repeat for the same energies moving in exactly the same direction, and explain the difference.

**Hint 1.** Add four-momenta before computing the invariant.

**Hint 2.** Opposite spatial momenta cancel, while parallel ones add.

**Solution.** For opposite directions total spatial momentum is zero and total energy is twice the individual energy, giving invariant mass twice that energy divided by squared light speed. For parallel directions total momentum magnitude is total energy divided by light speed, so the total invariant is zero. Each constituent is massless in both cases; the composite invariant depends on their relative motion. The opposite pair has a center-of-momentum rest frame, while the perfectly parallel pair does not. Adding individual rest masses would incorrectly assign zero to both configurations and miss the system's internal directional energy.

### Exercise 8: pair-production threshold with recoil {#em-mechanics-pair-threshold-target}

A photon strikes a stationary target of rest mass $M>0$ and creates a particle-antiparticle pair of equal rest mass $m>0$, leaving the target unchanged in rest mass. Derive the kinematic threshold photon energy. Assume an isolated final target-plus-pair state and do not infer a reaction rate.

**Hint 1.** The incoming invariant energy squared is $M^2c^4+2Mc^2E_\gamma$.

**Hint 2.** Threshold has zero relative final momentum in the center-of-momentum frame, giving total rest mass $M+2m$.

**Solution.** Equate the incoming invariant to $(M+2m)^2c^4$ at threshold. Subtracting the target rest term and dividing by the positive coefficient gives $E_{\gamma,\mathrm{thr}}=2mc^2(1+m/M)$. The additional term is required by target recoil in the laboratory; merely supplying the two new rest energies is insufficient for a finite target mass. The threshold tends to that simpler value as target mass grows without bound. This is a necessary kinematic condition within the stated channel. Interaction dynamics, target binding and competing channels determine whether and how often the process occurs.

### Exercise 9: one photon cannot decay into massive matter in empty space {#em-mechanics-null-to-massive-impossibility}

Prove a single nonzero future null momentum cannot equal the sum of two future massive momenta. Interpret the result for an isolated photon producing a massive pair without any other body or field exchanging momentum.

**Hint 1.** Each massive energy is strictly greater than light speed times its spatial momentum magnitude.

**Hint 2.** Combine those strict inequalities with the spatial triangle inequality.

**Solution.** The total energy of two future massive particles is strictly greater than light speed times the sum of their momentum magnitudes, which is at least light speed times the magnitude of their vector sum. Their total four-momentum is therefore timelike, not null. It cannot equal the incoming null photon momentum. An additional recoiling target or external field can exchange momentum and changes the complete system calculation, as the preceding threshold example illustrates. The impossibility follows from energy-momentum conservation and positive massive branches; it is not a statement that sufficient photon energy alone decides every reaction channel.

### Exercise 10: canonical quantities under gauge {#em-mechanics-gauge-canonical-quantities}

Apply the book's gauge transformation to the coupled particle Lagrangian. Derive changes of canonical momentum and Hamiltonian, and verify that the mechanical quantities and equations stay unchanged.

**Hint 1.** The coupling change is charge times the total trajectory derivative of the gauge function.

**Hint 2.** Differentiate the changed Lagrangian with respect to velocity before performing the Legendre expression.

**Solution.** The vector-potential change contributes charge times velocity dotted with the gauge gradient, and the scalar change contributes charge times the time derivative. Their sum is a total derivative along the path. Canonical momentum therefore gains charge times the spatial gradient, while the Hamiltonian gains negative charge times the partial time derivative. Subtracting the matching vector-potential contribution recovers unchanged mechanical momentum, and subtracting scalar potential energy recovers unchanged kinetic energy. Fixed-endpoint action variations discard the total-derivative boundary term, so the Lorentz force equations are identical. This is the explicit reason canonical energy and momentum require their potential corrections before being compared with the kinetic mass shell.
