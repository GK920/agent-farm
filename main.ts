agent.teleportToPlayer()
agent.move(FORWARD, 3)
agent.setItem(SEEDS, 16, 1)
agent.setAssist(DESTROY_OBSTACLES, true)
for (let i = 0; i < 4; i++) {
for (let i = 0; i < 4; i++)
agent.move(LEFT, 1)  
agent.till (FORWARD)
agent.place (FORWARD)
agent.move (BACK, 1)
agent.move (RIGHT, 4)
}