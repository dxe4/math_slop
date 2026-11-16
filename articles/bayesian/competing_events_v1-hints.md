# Hints for competing first failure practice

Attempt [practice](./competing_events_v1-practice.md) before opening a hint. Complete derivations remain on the separate [worked answers](./competing_events_v1-answers.md) page.

## 1 Derive the state probabilities before learning hazards

Subtract $S(t)$, divide by $h$, and take the short-interval limit. Entry into cause $j$ at time $t$ requires still being in the working state immediately beforehand. Integrating its probability flow uses overall working survival. Check the probability sum by differentiation and its initial value.

## 2 Construct the likelihood and retain the correct risk set

Every record contributes the exponential survival factor through its observed time. Only its observed failure cause supplies a hazard multiplier. For the bearing factor, a controller-failed machine contributes working exposure but no bearing-event power. When an analyst deletes a record, calculate the lost exposure as well as any lost event count.

## 3 Average over a common-rate posterior

Use $\lambda_1=RQ$ and $\lambda_2=R(1-Q)$ on $R>0,0<Q<1$. The absolute Jacobian determinant is $R$. With a common Gamma rate, the exponential term depends on $R$ alone. In the incidence formula the share and the function of total hazard are then independent. Surviving to an additional age contributes another survival likelihood factor to both hazards.

## 4 Separate actual incidence from a removal forecast

Write actual bearing-first incidence as an integral containing $e^{-\lambda_1u}e^{-\lambda_2u}$. The cause-1-only integral omits the second factor. Distinguish a calculation from the declared parametric model from an estimator fitted to observed data. For an intervention interpretation, state what must happen to the bearing transition mechanism when controller failures are removed.

## 5 Change one prior and rebuild the prediction

In $(R,Q)$ coordinates, unequal rates give exponential factor $e^{-R[b_2+(b_1-b_2)Q]}$, which does not separate. Instead calculate $E(e^{-u\lambda_j})$ and $E(\lambda_j e^{-u\lambda_j})$ for each Gamma posterior. Independence permits products in the original hazard coordinates. Differentiate their survival product to check the total incidence integral.

## 6 Transfer to zero failures and unequal rates

Zero events add no Gamma shape increments, but all six machine-weeks still increase both rates. The bearing incidence integrand simplifies to $80/[(u+8)^2(u+10)]$. Its partial fractions need only terms with denominators $u+8$, $(u+8)^2$ and $u+10$. Obtain the other incidence from the probability-sum identity after deriving its own integral.
