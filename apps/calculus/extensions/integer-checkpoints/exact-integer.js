// An integer checkpoint compares the entered mathematical value exactly.
// Decimal coefficients and powers of ten stay separate: no large 10^n allocation.
const literal='[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?';
const unsigned='(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?';

function scaled(coefficient,exponent=0n){
  if(coefficient===0n)return {coefficient:0n,exponent:0n};
  const text=coefficient.toString(),trimmed=text.replace(/0+$/,'');
  return {coefficient:BigInt(trimmed),exponent:exponent+BigInt(text.length-trimmed.length)};
}

function decimal(text){
  const [mantissa,power='0']=text.split('e'),point=mantissa.indexOf('.');
  const places=point<0?0:mantissa.length-point-1;
  return scaled(BigInt(mantissa.replace('.','')),BigInt(power)-BigInt(places));
}

function equal(left,right){return left.coefficient===right.coefficient&&left.exponent===right.exponent;}

// Call only after the normal numeric parser has accepted the input.
export function isExactIntegerAnswer(value,answer){
  if(!Number.isSafeInteger(answer))return false;
  const source=String(value??'').trim().toLowerCase().replaceAll('−','-').replaceAll('π','pi').replace(/[×·]/g,'*');
  const expected=BigInt(answer);
  if(new RegExp(`^${literal}$`).test(source))return equal(decimal(source),scaled(expected));
  let match=source.match(new RegExp(`^(${literal})\\s*/\\s*(${literal})$`));
  if(match){
    const numerator=decimal(match[1]),denominator=decimal(match[2]);
    return denominator.coefficient!==0n&&equal(numerator,scaled(expected*denominator.coefficient,denominator.exponent));
  }
  match=source.match(new RegExp(`^([+-]?)sqrt\\s*\\(\\s*(${unsigned})\\s*\\)(?:\\s*/\\s*(${unsigned}))?$`));
  if(match){
    if(answer!==0&&Math.sign(answer)!==(match[1]==='-'?-1:1))return false;
    const radicand=decimal(match[2]),denominator=decimal(match[3]||'1');
    return denominator.coefficient!==0n&&equal(radicand,scaled(expected*expected*denominator.coefficient*denominator.coefficient,2n*denominator.exponent));
  }
  match=source.match(new RegExp(`^[+-]?(?:(${unsigned})(?:\\s*\\*\\s*|\\s+)?)?(?:pi|e)(?:\\s*/\\s*(${unsigned}))?$`));
  // Nonzero rational multiples of pi or e cannot equal an integer.
  return Boolean(match)&&expected===0n&&decimal(match[1]||'1').coefficient===0n&&decimal(match[2]||'1').coefficient!==0n;
}
