# Positions, Ranges, and Mathematical Concepts

## Table Positions

### Early Position (EP)
- **Under the Gun (UTG)**: First to act pre-flop
- **UTG+1**: Second to act
- **Tight range**: Play only premium hands
- **Example hands**: AA, KK, QQ, AK, AQ

### Middle Position (MP)
- **MP1, MP2, MP3**: Middle positions
- **Moderate range**: Play good hands
- **Example hands**: TT+, AJ+, KQ, suited connectors

### Late Position (LP)
- **Cutoff (CO)**: One seat right of button
- **Button (BTN)**: Dealer position, acts last
- **Wide range**: Can play more hands
- **Example hands**: 22+, A2+, K2+, Q2+, J2+, T2+, 92+, 82+, 72+, 62+, 52+, 42+, 32

## Hand Ranges

### Range Notation
- **22+**: All pairs from 22 to AA
- **A2+**: All ace hands from A2 to AK
- **KQ**: King-Queen offsuit
- **KQs**: King-Queen suited
- **T9s**: Ten-Nine suited
- **98s**: Nine-Eight suited

### Positional Ranges
- **UTG**: 15-20% of hands
- **MP**: 20-25% of hands
- **CO**: 25-30% of hands
- **BTN**: 30-40% of hands
- **SB**: 15-25% of hands
- **BB**: 20-30% of hands (defending)

## GTO vs Exploitative Play

### Game Theory Optimal (GTO)
- **Balanced strategy**: Cannot be exploited
- **Mathematical approach**: Based on game theory
- **Mixed strategies**: Randomizing between actions
- **Use case**: Against unknown opponents

### Exploitative Play
- **Targeted strategy**: Exploits opponent weaknesses
- **Read-based**: Based on opponent tendencies
- **Pure strategies**: Consistent actions
- **Use case**: Against known opponents

## Equity

### Definition
- **Equity**: Your share of the pot based on hand strength
- **Expressed as percentage**: 0-100%
- **Changes with community cards**: Flop, turn, river

### Examples
- **AA vs KK**: ~80% vs ~20%
- **AK vs 22**: ~50% vs ~50%
- **Flush draw**: ~36% (9 outs)

## Pot Odds

### Formula
**Pot Odds = Pot Size / Cost to Call**

### Examples
- **Pot: $100, Bet: $50**
  - Pot Odds = $100 / $50 = 2:1
  - Need 33% equity to call

- **Pot: $200, Bet: $100**
  - Pot Odds = $200 / $100 = 2:1
  - Need 33% equity to call

### Quick Reference
- **2:1 odds**: Need 33% equity
- **3:1 odds**: Need 25% equity
- **4:1 odds**: Need 20% equity
- **5:1 odds**: Need 17% equity

## Implied Odds

### Definition
- **Implied Odds**: Additional money you can win on future streets
- **Reverse Implied Odds**: Additional money you might lose
- **Consideration**: Opponent's stack size and tendencies

### Example
- **Flush draw on flop**
- **Direct odds**: 2:1 (need 33% equity)
- **Implied odds**: Can win more on turn/river
- **Decision**: Call with flush draw due to implied odds
