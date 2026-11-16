# Worked answers for scale prior normalization

Attempt each task before opening its answer. Keep model assumptions and reference measures beside the formulas they justify.

## 1 Changed data and two endpoints

Here $J=3$ and $S=5$, so

$$L(\tau)=(2\pi)^{-3/2}(1+\tau^2)^{-3/2}
\exp[-5/(2(1+\tau^2))].$$

At zero the likelihood tends to $(2\pi)^{-3/2}e^{-5/2}>0$; at infinity its ratio to $\tau^{-3}$ tends to $(2\pi)^{-3/2}$. The posterior is proper exactly when $-1<k<2$. At $k=0$, the first scale moment exists because $1<2$, but the second does not: its tail integral is proportional to $\int^\infty\tau^{-1}d\tau$. Nonzero spread changes constants, not the positive lower-end limit, so $k=-1$ still fails. This is known measurement noise with an additional group scale, not the unknown-residual-scale reference in Chapter 4.

## 2 Cutoff calculation and predictions

Let $\epsilon=10^{-4},M=1$ and retain

$$Z=\log(10^4)-\tfrac12\log[2/(1+10^{-8})]\approx8.863767.$$

The formulas in the lesson give

$$\Pr(\tau>0.1\mid y)=Z_{0.1}/Z\approx0.221236,$$

$$E(\tau^2\mid y)\approx0.039100,\qquad E(w\mid y)\approx0.028205.$$

These are variances of the new latent group and existing zero-observed latent group respectively. Add one for a future individual noisy reading: new-group variance $1.039100$, existing-group variance $1.028205$. All means are zero in this bounded, zero-data fixture. A mixture of Normals with variable variances is generally not Normal. Its variance alone does not determine its quantiles; an exact interval would require the mixture CDF or another justified computation.

## 3 Proper cutoffs and the improper limit

For fixed $\delta$, the numerator $Z_\delta$ is finite and positive, whereas $Z_\epsilon\to\infty$. Their ratio tends to zero. Before any data, the proper log-uniform prior has

$$E(\tau^2)=\frac{\int_\epsilon^1\tau\,d\tau}{\log(1/\epsilon)}
=\frac{1-\epsilon^2}{2\log(1/\epsilon)}\longrightarrow0.$$

Each finite prior and posterior is normalized on its declared bounded support. Removing the lower cutoff produces the positive-line kernel $1/[\tau(1+\tau^2)]$, whose integral at zero diverges. There is no normalized density proportional to that kernel. On a space including zero, the sequence can instead converge weakly to a point mass at zero. This is a probability measure with an atom, not the claimed positive-line density. For the original hierarchy, zero means degenerate group effects at the known population mean. Interpreting that as a new limiting model must be explicit.

## 4 Uniform in scale

The posterior integral is $\int_0^1(1+\tau^2)^{-1}d\tau=\pi/4$. Its density is $4/[\pi(1+\tau^2)]$ on $(0,1)$. Using $\tau^2/(1+\tau^2)=1-(1+\tau^2)^{-1}$ gives

$$E(\tau^2\mid y)=4/\pi-1\approx0.273240.$$

For $E(w\mid y)$, integrate $\tau^2/(1+\tau^2)^2$. A primitive is $\tfrac12[\arctan\tau-\tau/(1+\tau^2)]$. Hence $E(w\mid y)=1/2-1/\pi\approx0.181690$.

The prior has $E(\tau^2)=1/3$, so a new-group noisy reading has prior-predictive variance $4/3$. Its posterior-predictive variance is $1+(4/\pi-1)=4/\pi\approx1.273240$. This differs from task 2 because the proper priors assign different weights to physical-scale regions. A smaller uncertainty can be manufactured by a more concentrated prior; adequacy needs defensible prior information, prior predictions and model criticism, not a contest to produce the narrowest posterior.

## 5 Four groups and heavy tails

The posterior kernel is $(1+\tau^2)^{-2}$. Its integral over $(0,\infty)$ is $\pi/4$, giving density $4/[\pi(1+\tau^2)^2]$. Substitution $u=1+\tau^2$ yields $\int_0^\infty\tau(1+\tau^2)^{-2}d\tau=1/2$, so $E(\tau)=2/\pi$.

Using the symmetry substitution $\tau=1/u$ shows that $\int_0^\infty\tau^2(1+\tau^2)^{-2}d\tau=\pi/4$, hence $E(\tau^2)=1$. The primitive $\tfrac12[\arctan\tau+\tau/(1+\tau^2)]$ gives $\Pr(\tau>1)=1/2-1/\pi$.

Positive moments exist exactly for $m<3$; the third moment is a logarithmic boundary failure. The latent new-group predictive variance is one and the noisy predictive variance is two, with finite means zero. Their mixing over a nondegenerate scale distribution does not make them Normal. Replacing the data by $(-1,-1,1,1)$ changes the exponential factor to $e^{-2/(1+\tau^2)}$, so the zero limit and tail powers remain the same. Propriety and the moment threshold therefore remain unchanged, although the normalized density and numerical moments change.

## 6 Units and the report

Write $r=\tau/2$ and $z_j=y_j/2$. Then $z_j$ has known noise variance one and group-scale $r\in[0.01,1]$. The event $\tau>0.2$ becomes $r>0.1$, so its posterior probability is approximately $0.460472$. The physical new-group observation variance is $4[1+E(r^2\mid z)]$, using the $\epsilon=0.01$ fixture; it is approximately $4.325478$ physical units squared. Scaling both observation noise and cutoffs preserves the same physical model. Keeping an old numeric cutoff without transforming it changes the assumed support and hence the prior; it need not preserve probabilities.

The analyst fitted a finite-cutoff log-uniform model, which has a proper posterior in this fixture. That is distinct from the proposed unbounded log-uniform model, whose normalization diverges at zero for every finite dataset. More draws may improve computation for the bounded target but cannot turn the unbounded kernel into a probability density. Compare $\Pr(\tau>0.1\mid y)$ and prediction moments over several scientifically relevant lower cutoffs and a defensible proper alternative. The supplied packet does not establish actual sampling quality, and stable-looking output alone establishes neither normalization nor model adequacy.
