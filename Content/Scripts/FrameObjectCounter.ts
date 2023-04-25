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

    let owner = this.GetOwner();
    
    let objectDesc : xii.GameObjectDesc = new xii.GameObjectDesc();
    {
      objectDesc.Name = "Object" + this.iCounter;
      objectDesc.ActiveFlag = true;
      objectDesc.Dynamic = true;
      objectDesc.LocalPosition = owner.GetGlobalPosition();
      // objectDesc.LocalRotation = new xii.Quat(0.0, 0.0, 0.0);
      // objectDesc.LocalScaling = new xii.Vec3(0.0, 0.0, 0.0);
    }

    let spawnedObject : xii.GameObject =  xii.World.CreateObject(objectDesc);
    if (spawnedObject == null)
    {
      xii.Log.Warning("Failed to create game object for physics body '" + this.iCounter + "'");
      return;
    }

    let prefabReferenceComponent : xii.PrefabReferenceComponent = xii.World.CreateComponent(spawnedObject, xii.PrefabReferenceComponent);
    if (prefabReferenceComponent == null)
    {
      xii.Log.Warning("Failed to create prefab reference component for physics ")
      return;
    }
    
    prefabReferenceComponent.Prefab = "{ ca4ffce1-3d7e-4186-a7aa-971b44472e9a }";
    
    xii.Debug.DrawInfoText(xii.Debug.ScreenPlacement.TopCenter, "Physics Body Count: " + this.iCounter, xii.Color.GreenYellow());
  }
}
