import * as readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.prompt()

/**
米哈游0317春招笔试，题目回忆如下：
技能E，使用会对所有怪物造成E点伤害，如果有怪物血量收到攻击后第一次掉到50%及以下，且还有其他怪物存活，
即血量>0，则会触发R横扫技能，R技能会对所有怪物再造成R点伤害。
如果有多个怪物同时掉到50%以下，且还有存活的怪物，则会触发多次R技能。

小美觉得太简单了，需要计算出使用了多少次E技能和多少次R技能才能杀死所有怪物

输入：
查询组数，如 3
怪物数量，如 4
怪物的血量，如 60 80 40 100
E技能和R技能的伤害，如 30 10

输出：
杀死所有怪物需要释放的E技能和R技能的数量， 如2 3

示例：
1
4
60 80 40 100
30 10
2 2

第一释放E技能，血量变为 30 50 10 70
怪物1，2触发R技能，血量变为 20 40 0 60，10 30 0 50
怪物4触发R技能，血量变为 0 20 0 40
第二次使用E技能，血量变为 0 10 0 30
第三次使用E技能，血量变为 0 0 0 0，所有怪物死亡
使用了E技能3次，R技能3次
*/

class Monster {
  // use class Monster to instanciate monsters
  name = ""
  health = 0 // HP value
  onceBelow50 = false // is it the first time that the health value drops below 50
  isAlive = true // is the monster still alive

  constructor(health: number, name: string = "") {
    this.health = health
    this.name = name
    if (health <= 0) this.isAlive = false
  }

  underAttack(damage: number) {
    let h = this.health - damage
    this.onceBelow50 = this.health > 50 && h <= 50 // (is the first time) = (previous HP > 50) and (current HP <= 50)
    this.isAlive = h > 0
    this.health = h < 0 ? 0 : h
  }
}

let q = -1 // query counts
let lineNum = 0 // input line No.
let n = -1 // the No. of the monsters
let monsters: Monster[] = [] // use an array to store Monster instances.
let E = 0,
  R = 0 // the damage value of skills E and R

rl.on("line", function (line) {
  if (q < 0) {
    q = parseInt(line)
  } else if (lineNum % 3 === 0) {
    // parse input line by line, 3 lines in total
    lineNum++
    n = parseInt(line)
  } else if (lineNum % 3 === 1) {
    lineNum++
    const tokens = line.split(" ").map((s) => parseInt(s)) // parse monsters' HP values, and create Monster instances.
    monsters = tokens.map((h, i) => new Monster(h, `M${i}`))
  } else if (lineNum % 3 === 2) {
    lineNum++
    const tokens = line.split(" ").map((s) => parseInt(s))
    E = tokens[0]
    R = tokens[1]
    // inputs finished here. All variables are ready.

    let ECount = 0,
      RCount = 0 // store how many times each skill being released
    let EWait = 0,
      RWait = 0 // store how many skills pending to be released

    while (monsters.length) {
      // `monsters` only keeps alive monsters
      if (!EWait && !RWait) EWait = 1 // if all skills are released and there're still monsters alive, use E.

      while (EWait && monsters.length) {
        ECount++
        EWait--

        monsters.forEach((m) => m.underAttack(E)) // release E attack!
        for (let i = 0; i < monsters.length; i++) {
          const m = monsters[i]
          const restAliveMonsters = monsters.filter((_, j) => j != i).filter((m) => m.isAlive) // filter other alive monsters except the current one
          if (m.onceBelow50 && restAliveMonsters.length) {
            // calc R count, satisfying (the first time HP drops below 50) and (still other monsters alive)
            RWait++
          }
        }
        monsters = monsters.filter((m) => m.isAlive) // remove dead monsters
      }

      while (RWait && monsters.length) {
        RCount++
        RWait--

        monsters.forEach((m) => m.underAttack(R)) // release R attack!
        for (let i = 0; i < monsters.length; i++) {
          const m = monsters[i]
          const restAliveMonsters = monsters.filter((_, j) => j != i).filter((m) => m.isAlive)
          if (m.onceBelow50 && restAliveMonsters.length) {
            RWait++
          }
        }
        monsters = monsters.filter((m) => m.isAlive)
      }
    }

    console.log(ECount, RCount)
  }
})
