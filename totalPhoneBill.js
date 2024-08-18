export function totalPhoneBill(usage) {
  const calls = usage.split(',').filter(item => item.trim() === 'call').length;
  const sms = usage.split(',').filter(item => item.trim() === 'sms').length;
  return `R${(calls * 2.75 + sms * 0.65).toFixed(2)}`;
}
