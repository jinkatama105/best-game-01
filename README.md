# Starfall - best-game-01

A neon asteroid arcade game for the make.fun bounty
[Make the best game](https://make.fun/bounty/best-game-01).

## The game

Pilot a ship through a neon asteroid field. Your ship fires automatically:
dodge the rocks, blast them for points, grab power-ups (shield, double shot,
rapid fire), and survive the chaser drones that appear from level 3.

Controls: mouse or arrow keys / WASD to move, P or Esc to pause,
L to switch between English and Japanese.

## Build

There is nothing to build. The game is a single static file,
`game/index.html`, with no dependencies and no backend.

## Run

Open `game/index.html` directly in a browser, or serve it with Node 22
(no dependencies):

```sh
node main.ts
# then open http://localhost:8080/
```

`main.ts` is a standard-library-only static server for the `game/`
directory; set `PORT` to change the port.

## Files

- `game/index.html` - the whole game (HTML, CSS, JavaScript)
- `main.ts` - entrypoint: static file server for `game/`
