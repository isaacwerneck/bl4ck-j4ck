const r =  require('raylib')
function main() {

    r.InitWindow(800, 600, "bl4ack j4ck")
    r.SetTargetFPS(60)
    let cena = "Menu"

    while (!r.WindowShouldClose()) {

        const mousePosition = r.GetMousePosition()

        
        if (cena === "Menu") {
        r.BeginDrawing()

        r.DrawRectangle(300, 300, 200, 50, r.GRAY)
        r.DrawText("Play", 310, 315, 20, r.BLACK)

        if (r.CheckCollisionPointRec(mousePosition, { x: 300, y: 300, width: 200, height: 50 })) {
            r.DrawRectangle(300, 300, 200, 50, r.LIGHTGRAY)
            r.DrawRectangleLines(300, 300, 200, 50, r.DARKGRAY)
            r.DrawText("Play", 310, 315, 20, r.RED)
            if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_LEFT)) {
                cena = "Game"
                        }

        }

        r.ClearBackground(r.LIGHTGRAY)
        r.DrawText("bl4ack j4ck", 10, 10, 20, r.DARKGRAY)

        r.EndDrawing()
    } if (cena === "Game") {
        r.BeginDrawing()
        r.ClearBackground(r.LIGHTGRAY)  
        r.DrawRectangle(300, 250, 100, 150, r.GRAY)
        
        r.EndDrawing()
    }

}}
main()