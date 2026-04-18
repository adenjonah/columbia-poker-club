# Positions, Ranges, Pot Odds & Equity

The four pillars that turn hard hands into math problems.

## Pillar 1: Position

| Position | Group | How to play |
|----------|-------|-------------|
| UTG, UTG+1 | Early | Tight — premiums only |
| MP, HJ | Middle | Moderate |
| CO, BTN | Late | Wide — play most playable hands |
| SB, BB | Blinds | Defend carefully; act last preflop |

**Rule of thumb**: BTN plays roughly 3× more hands than UTG.

## Pillar 2: Ranges

Think in **sets of hands**, not one specific hand. You can't see their cards.

**Beginner**: "I think they have KQ."
**Better**: "Their 3-bet range is roughly QQ+, AK, maybe AQs."

### Range notation quick-reference

| Notation | Meaning |
|----------|---------|
| `22+` | All pairs 22 through AA |
| `AJs+` | AJ suited, AQ suited, AK suited |
| `AJo+` | AJ offsuit, AQ offsuit, AK offsuit |
| `76s` | Seven-six suited |

### Typical opening ranges

- UTG: ~15% of hands
- MP: ~20%
- CO: ~30%
- BTN: ~40%
- SB (open): ~25%

## Pillar 3: Pot Odds

When facing a bet, how often do you need to win to break even?

### Formula

**required equity = call / (pot + call)**

### Example

Pot is 100. Opponent bets 50. You must call 50 into a pot of 150.

`50 / (150 + 50) = 50 / 200 = 25%`

If you'll win at least 25% of the time, calling is break-even.

### Memorize these four

| They bet | You need |
|----------|----------|
| ½ pot | 25% |
| ⅔ pot | 29% |
| full pot | 33% |
| 2× pot | 40% |

## Pillar 4: Equity

Your hand's win percentage versus their range by showdown.

### Rule of 2 and 4 (draws)

- **On the turn** (1 card to come): outs × 2 ≈ equity %
- **On the flop** (2 cards to come): outs × 4 ≈ equity %

### Common out counts

- Flush draw: 9 outs (9 × 4 = 36% on the flop)
- Open-ended straight draw: 8 outs (32% on the flop)
- Gutshot: 4 outs (16% on the flop)
- Overcards: 6 outs (24% on the flop)

### Made-hand equity benchmarks

- AA vs. KK: ~80% / 20%
- AK vs. 22: ~50% / 50%
- Top pair vs. random: ~70%

## Putting it together

Call when `equity > required`. Fold when `equity < required`.

Everything else — bluffs, reads, sizing — sits on top of that one comparison.

## Implied odds (bonus)

**Direct pot odds** only look at the current pot. **Implied odds** also account for chips you expect to win on future streets if you hit.

A flush draw with a 33% direct price but a deep opponent likely to pay off is often a call at worse-than-direct odds, because the implied winnings make up the gap.

Flip side: **reverse implied odds** — sometimes hitting your hand costs you *more* (e.g. completing a weak flush when a bigger flush beats you).

## Recap

1. **Position** — play wider late, tighter early.
2. **Ranges** — reason about sets of hands.
3. **Pot odds** — `call / (pot + call)` = required equity.
4. **Equity** — outs × 4 on flop, × 2 on turn. Compare.

Memorize: ½ pot = 25%, ⅔ pot = 29%, pot = 33%.
