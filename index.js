/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */

// I felt using console to check functions was effective but wanted to integrate prompts and user input for more practice with them //

// let spellInput = prompt(`Does the wizard have the spell prepared?
// 1. Yes
// 2. No`);

// let spellPrepped = Number(spellInput); // The prompt requests the user to input an integer value relating to Yes or No, essentially relating to the boolean true or false
// let isSpellPrepared = []; // Initializing one of the arguments outside all functions and nested loops, to be filled, so it can be accessed later when the function is called
// let hasScroll = []; // Initializing the other argument, to be filled later from the validation sequencing

// if (spellPrepped === 1) { //
//   isSpellPrepared = spellPrepped;
//   console.log(isSpellPrepared);
// } else if (spellPrepped === 2) {
//   scrollInput = prompt(`Does the wizard have a scroll?
// 1. Yes
// 2. No`);

//     let scrollHad = Number(scrollInput);

//     if (scrollHad === 1) {
//       hasScroll = scrollHad;
//       console.log(hasScroll);
//     } else if (scrollHad === 2) {
//       alert("Then no spell can be cast...");
//     } else {
//       alert("Enter 1 or 2");
//     }
// } else {
//   alert("Enter 1 or 2");
// }

function canCastSpell(isSpellPrepared, hasScroll) {
  if (isSpellPrepared === 1) {
    console.log("A spell can be cast: ", true)
    return true;
  } else if (hasScroll === 1) {
    console.log("A spell can be cast: ", true)
    return true;
  } else {
    console.log("A spell can be cast: ", false)
    return false;
  }
}

// canCastSpell(isSpellPrepared, hasScroll);

/////////////////////////////////////////////////////////////////
// The rest will not use prompt / alert to keep the file small //
/////////////////////////////////////////////////////////////////

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */


function isHidden(hiding, aware) {
  if (hiding === true) {
    console.log("Creature is hiding: ", true);
    return true;
  } else if (hiding === false && aware === false) {
    console.log("Observer is NOT aware of creature: ", true)
    return true;
  } else {
    console.log("Creature is hidden from observer: ", false);
    return false;
  }
}

/////////////////////////////////////////////////////////////////

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */

function doesStrikeHit(attack, ac) {
  if (attack >= ac) {
    console.log("Attack stronger than Armor Class, strike hits: ", true);
    return true;
  } else if (attack < ac) {
    console.log("Attack weaker than Armor Class, strike misses: ", false)
    return false
  } else {
    console.log("Enter proper number values")
  }
}

/////////////////////////////////////////////////////////////////

/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */

function doesStrikeCrit(attack, ac) {
  if (attack >= ac+10) {
    console.log("Critical Hit! ", true);
    return true;
  } else {
    console.log("Not a crit hit.", false);
    return false;
  }
}

/////////////////////////////////////////////////////////////////

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */

function heal(maxHp, currentHp, healAmount) {

  if (currentHp < maxHp) {
    console.log("Creature is healing...", true);
    console.log("Current HP: ", currentHp);
    console.log("Heal amount: ", healAmount);
    console.log("After healing: ", (currentHp + healAmount));
    return true;
  } else if (currentHp === maxHp) {
    console.log("Creature is fully healed!", true);
    console.log("Current HP: ", maxHp);
    console.log("No further healing.");
    return true;
  } else if (currentHp > maxHp) {
    console.log("Creature stats entered incorrectly");
  } else {
    console.log("Enter creatures full stats");
  }
}

/////////////////////////////////////////////////////////////////

/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  if (rank === "---") {
    console.log("Rank: ", rank)
    console.log("Bonus: ", "---");
    return "---";
  } else if (rank === "untrained") {
    console.log("Rank: ", rank)
    console.log("Bonus: ", 0);
    return 0;
  } else if (rank === "trained") {
    console.log("Rank: ", rank);
    console.log("Bonus: ", level+2);
    return (level+2);
  } else if (rank === "expert") {
    console.log("Rank: ", rank);
    console.log("Bonus: ", level+4);
    return (level+4);
  } else if (rank === "master") {
    console.log("Rank: ", rank);
    console.log("Bonus: ", level+6);
    return (level+6);
  } else if (rank === "legendary") {
    console.log("Rank: ", rank);
    console.log("Bonus: ", level+8);
    return (level+8);
  } else {
    console.log("Enter proper rank");
  }
}

/////////////////////////////////////////////////////////////////

/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */

function getCoverBonus(behindObstacle, takingCover) {
  if (behindObstacle === true && takingCover === false) {
    console.log("Behind an obstacle but not taking cover, added AC bonus: ", 2);
    return 2;
  } else if (behindObstacle === true && takingCover === true) {
    console.log("Taking cover behind an obstacle, added AC bonus: ", 4);
    return 4;
  } else {
    console.log("No AC bonus, creature is not taking cover behind an obstacle.");
    return 0;
  }
}

/////////////////////////////////////////////////////////////////

/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */

function getRemainingHp(maxHp, currentHp, damage) {  
  if (damage >= 2*maxHp) {
    console.log("Creature just got smoked!");
    console.log("Current HP: ", -1);
    return -1;
  } else if (currentHp <= 0) {
    console.log("Creature has passed away");
    console.log("Current HP: ", 0);
    return 0;
  } else {
    let postDamageHp = currentHp - damage;
    if (postDamageHp <= 0) {
      console.log("Creature has passed away. Current HP: ", postDamageHp);
      return 0;
    } else { 
    console.log("Max HP: ", maxHp);
    console.log("Current HP: ", currentHp);
    console.log("Damage Taken: ", damage);
    console.log("HP After Damage: ", postDamageHp);
    return (currentHp - damage);
    }
  }
}

/////////////////////////////////////////////////////////////////

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  // TODO
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  // TODO
}
