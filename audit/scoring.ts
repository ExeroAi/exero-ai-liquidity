export function calculateScore(data: any) {

  let score = 0;

  if(data.liquidity) score += 40;

  if(data.ownershipRenounced) score += 30;

  score += 20;

  return score;
}
