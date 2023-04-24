import xii = require("TypeScript/xii");

export class FrameObjectCounter extends xii.TickedTypescriptComponent
{
  /* BEGIN AUTO-GENERATED: VARIABLES */
    /* END AUTO-GENERATED: VARIABLES */

  constructor()
  {
    super();
  }

  static RegisterMessageHandlers()
  {
    xii.TypescriptComponent.RegisterMessageHandler(xii.MsgSetColor, "OnMsgSetColor");
  }

  iCounter: number = 0;

  OnSimulationStarted(): void
  {
    // The tick time must be the same as the spawn time.
    this.SetTickInterval(xii.Time.Milliseconds(10));
  }

  OnMsgSetColor(msg: xii.MsgSetColor): void
  {
    xii.Log.Info("MsgSetColor: " + msg.Color.r + ", " + msg.Color.g + ", " + msg.Color.b + ", " + msg.Color.a);
  }

  Tick(): void
  {
    ++this.iCounter;
    xii.Debug.DrawInfoText(xii.Debug.ScreenPlacement.TopCenter, "Physics Body Count: " + this.iCounter, xii.Color.GreenYellow());
  }
}
