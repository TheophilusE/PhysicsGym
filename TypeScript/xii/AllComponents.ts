
import __GameObject = require("TypeScript/xii/GameObject")
export import GameObject = __GameObject.GameObject;

import __Component = require("TypeScript/xii/Component")
export import Component = __Component.Component;

import __Vec2 = require("TypeScript/xii/Vec2")
export import Vec2 = __Vec2.Vec2;

import __Vec3 = require("TypeScript/xii/Vec3")
export import Vec3 = __Vec3.Vec3;

import __Mat3 = require("TypeScript/xii/Mat3")
export import Mat3 = __Mat3.Mat3;

import __Mat4 = require("TypeScript/xii/Mat4")
export import Mat4 = __Mat4.Mat4;

import __Quat = require("TypeScript/xii/Quat")
export import Quat = __Quat.Quat;

import __Transform = require("TypeScript/xii/Transform")
export import Transform = __Transform.Transform;

import __Color = require("TypeScript/xii/Color")
export import Color = __Color.Color;

import __Time = require("TypeScript/xii/Time")
export import Time = __Time.Time;

import __Angle = require("TypeScript/xii/Angle")
export import Angle = __Angle.Angle;

import Enum = require("./AllEnums")
import Flags = require("./AllFlags")

declare function __CPP_ComponentProperty_get(component: Component, id: number);
declare function __CPP_ComponentProperty_set(component: Component, id: number, value);
declare function __CPP_ComponentFunction_Call(component: Component, id: number, ...args);

export class AgentSteeringComponent extends Component
{
  public static GetTypeNameHash(): number { return 633374792; }
  SetTargetPosition(position: Vec3): void { __CPP_ComponentFunction_Call(this, 104601254, position); }
  GetTargetPosition(): Vec3 { return __CPP_ComponentFunction_Call(this, 47306750); }
  ClearTargetPosition(): void { __CPP_ComponentFunction_Call(this, 2366602562); }
}

export class RenderComponent extends Component
{
  public static GetTypeNameHash(): number { return 3619152604; }
}

export class AlwaysVisibleComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2438467837; }
}

export class SettingsComponent extends Component
{
  public static GetTypeNameHash(): number { return 3880158352; }
}

export class AmbientLightComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 2871613464; }
  get TopColor(): Color { return __CPP_ComponentProperty_get(this, 2480995435); }
  set TopColor(value: Color) { __CPP_ComponentProperty_set(this, 2480995435, value); }
  get BottomColor(): Color { return __CPP_ComponentProperty_get(this, 433368003); }
  set BottomColor(value: Color) { __CPP_ComponentProperty_set(this, 433368003, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 3867549271); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 3867549271, value); }
}

export class MeshComponentBase extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1734045686; }
}

export class AnimatedMeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 144306491; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 2412817987); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 2412817987, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1204637747); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1204637747, value); }
}

export class AnimationControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 2935019573; }
  get AnimController(): string { return __CPP_ComponentProperty_get(this, 4103518424); }
  set AnimController(value: string) { __CPP_ComponentProperty_set(this, 4103518424, value); }
  get RootMotionMode(): Enum.RootMotionMode { return __CPP_ComponentProperty_get(this, 3317090350); }
  set RootMotionMode(value: Enum.RootMotionMode) { __CPP_ComponentProperty_set(this, 3317090350, value); }
}

export class AreaDamageComponent extends Component
{
  public static GetTypeNameHash(): number { return 2433422537; }
  ApplyAreaDamage(): void { __CPP_ComponentFunction_Call(this, 3015963546); }
  get OnCreation(): boolean { return __CPP_ComponentProperty_get(this, 221825793); }
  set OnCreation(value: boolean) { __CPP_ComponentProperty_set(this, 221825793, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 484277824); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 484277824, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2370372464); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2370372464, value); }
  get Damage(): number { return __CPP_ComponentProperty_get(this, 3822912095); }
  set Damage(value: number) { __CPP_ComponentProperty_set(this, 3822912095, value); }
  get Impulse(): number { return __CPP_ComponentProperty_get(this, 3787709082); }
  set Impulse(value: number) { __CPP_ComponentProperty_set(this, 3787709082, value); }
}

export class BakedProbesComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 3554469309; }
  get ShowDebugOverlay(): boolean { return __CPP_ComponentProperty_get(this, 1659754100); }
  set ShowDebugOverlay(value: boolean) { __CPP_ComponentProperty_set(this, 1659754100, value); }
  get ShowDebugProbes(): boolean { return __CPP_ComponentProperty_get(this, 3920777698); }
  set ShowDebugProbes(value: boolean) { __CPP_ComponentProperty_set(this, 3920777698, value); }
  get UseTestPosition(): boolean { return __CPP_ComponentProperty_get(this, 1079527552); }
  set UseTestPosition(value: boolean) { __CPP_ComponentProperty_set(this, 1079527552, value); }
  get TestPosition(): Vec3 { return __CPP_ComponentProperty_get(this, 3624214610); }
  set TestPosition(value: Vec3) { __CPP_ComponentProperty_set(this, 3624214610, value); }
}

export class BakedProbesVolumeComponent extends Component
{
  public static GetTypeNameHash(): number { return 4099207230; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 3803038426); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 3803038426, value); }
}

export class BeamComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 190501419; }
  get TargetObject(): string { return __CPP_ComponentProperty_get(this, 4062884); }
  set TargetObject(value: string) { __CPP_ComponentProperty_set(this, 4062884, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 650827875); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 650827875, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3873272500); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3873272500, value); }
  get Width(): number { return __CPP_ComponentProperty_get(this, 2384272435); }
  set Width(value: number) { __CPP_ComponentProperty_set(this, 2384272435, value); }
  get UVUnitsPerWorldUnit(): number { return __CPP_ComponentProperty_get(this, 4147299077); }
  set UVUnitsPerWorldUnit(value: number) { __CPP_ComponentProperty_set(this, 4147299077, value); }
}

export class BlackboardComponent extends Component
{
  public static GetTypeNameHash(): number { return 2559293326; }
  SetEntryValue(Name: string, Value: any): void { __CPP_ComponentFunction_Call(this, 3775887428, Name, Value); }
  GetEntryValue(Name: string): any { return __CPP_ComponentFunction_Call(this, 3060554957, Name); }
  get BlackboardName(): string { return __CPP_ComponentProperty_get(this, 871958911); }
  set BlackboardName(value: string) { __CPP_ComponentProperty_set(this, 871958911, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 1724163039); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 1724163039, value); }
  get SendEntryChangedMessage(): boolean { return __CPP_ComponentProperty_get(this, 3052199040); }
  set SendEntryChangedMessage(value: boolean) { __CPP_ComponentProperty_set(this, 3052199040, value); }
}

export class ReflectionProbeComponentBase extends Component
{
  public static GetTypeNameHash(): number { return 39681015; }
  get ReflectionProbeMode(): Enum.ReflectionProbeMode { return __CPP_ComponentProperty_get(this, 2449310004); }
  set ReflectionProbeMode(value: Enum.ReflectionProbeMode) { __CPP_ComponentProperty_set(this, 2449310004, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 1978047052); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 1978047052, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 3925024281); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 3925024281, value); }
  get CaptureOffset(): Vec3 { return __CPP_ComponentProperty_get(this, 1389386415); }
  set CaptureOffset(value: Vec3) { __CPP_ComponentProperty_set(this, 1389386415, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 4195116970); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 4195116970, value); }
  get ShowMipMaps(): boolean { return __CPP_ComponentProperty_get(this, 2560458654); }
  set ShowMipMaps(value: boolean) { __CPP_ComponentProperty_set(this, 2560458654, value); }
}

export class BoxReflectionProbeComponent extends ReflectionProbeComponentBase
{
  public static GetTypeNameHash(): number { return 4250909307; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 2972269215); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 2972269215, value); }
  get InfluenceScale(): Vec3 { return __CPP_ComponentProperty_get(this, 2100535001); }
  set InfluenceScale(value: Vec3) { __CPP_ComponentProperty_set(this, 2100535001, value); }
  get InfluenceShift(): Vec3 { return __CPP_ComponentProperty_get(this, 1514990590); }
  set InfluenceShift(value: Vec3) { __CPP_ComponentProperty_set(this, 1514990590, value); }
  get PositiveFalloff(): Vec3 { return __CPP_ComponentProperty_get(this, 2208050970); }
  set PositiveFalloff(value: Vec3) { __CPP_ComponentProperty_set(this, 2208050970, value); }
  get NegativeFalloff(): Vec3 { return __CPP_ComponentProperty_get(this, 2863521892); }
  set NegativeFalloff(value: Vec3) { __CPP_ComponentProperty_set(this, 2863521892, value); }
  get BoxProjection(): boolean { return __CPP_ComponentProperty_get(this, 1511218000); }
  set BoxProjection(value: boolean) { __CPP_ComponentProperty_set(this, 1511218000, value); }
}

export class CameraComponent extends Component
{
  public static GetTypeNameHash(): number { return 3752319594; }
  get EditorShortcut(): number { return __CPP_ComponentProperty_get(this, 2183487954); }
  set EditorShortcut(value: number) { __CPP_ComponentProperty_set(this, 2183487954, value); }
  get UsageHint(): Enum.CameraUsageHint { return __CPP_ComponentProperty_get(this, 3626295604); }
  set UsageHint(value: Enum.CameraUsageHint) { __CPP_ComponentProperty_set(this, 3626295604, value); }
  get Mode(): Enum.CameraMode { return __CPP_ComponentProperty_get(this, 1560838757); }
  set Mode(value: Enum.CameraMode) { __CPP_ComponentProperty_set(this, 1560838757, value); }
  get RenderTarget(): string { return __CPP_ComponentProperty_get(this, 2461803985); }
  set RenderTarget(value: string) { __CPP_ComponentProperty_set(this, 2461803985, value); }
  get RenderTargetOffset(): Vec2 { return __CPP_ComponentProperty_get(this, 1767909607); }
  set RenderTargetOffset(value: Vec2) { __CPP_ComponentProperty_set(this, 1767909607, value); }
  get RenderTargetSize(): Vec2 { return __CPP_ComponentProperty_get(this, 2274200918); }
  set RenderTargetSize(value: Vec2) { __CPP_ComponentProperty_set(this, 2274200918, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 415703111); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 415703111, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 2335856275); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 2335856275, value); }
  get FOV(): number { return __CPP_ComponentProperty_get(this, 389282140); }
  set FOV(value: number) { __CPP_ComponentProperty_set(this, 389282140, value); }
  get Dimensions(): number { return __CPP_ComponentProperty_get(this, 1356268731); }
  set Dimensions(value: number) { __CPP_ComponentProperty_set(this, 1356268731, value); }
  get CameraRenderPipeline(): string { return __CPP_ComponentProperty_get(this, 2944016827); }
  set CameraRenderPipeline(value: string) { __CPP_ComponentProperty_set(this, 2944016827, value); }
  get Aperture(): number { return __CPP_ComponentProperty_get(this, 3263549173); }
  set Aperture(value: number) { __CPP_ComponentProperty_set(this, 3263549173, value); }
  get ShutterTime(): number { return __CPP_ComponentProperty_get(this, 231802478); }
  set ShutterTime(value: number) { __CPP_ComponentProperty_set(this, 231802478, value); }
  get ISO(): number { return __CPP_ComponentProperty_get(this, 2874942624); }
  set ISO(value: number) { __CPP_ComponentProperty_set(this, 2874942624, value); }
  get ExposureCompensation(): number { return __CPP_ComponentProperty_get(this, 2052853951); }
  set ExposureCompensation(value: number) { __CPP_ComponentProperty_set(this, 2052853951, value); }
  get ShowStats(): boolean { return __CPP_ComponentProperty_get(this, 147628258); }
  set ShowStats(value: boolean) { __CPP_ComponentProperty_set(this, 147628258, value); }
}

export class CameraShakeComponent extends Component
{
  public static GetTypeNameHash(): number { return 1308693599; }
  get MinShake(): number { return __CPP_ComponentProperty_get(this, 2105400938); }
  set MinShake(value: number) { __CPP_ComponentProperty_set(this, 2105400938, value); }
  get MaxShake(): number { return __CPP_ComponentProperty_get(this, 1431593192); }
  set MaxShake(value: number) { __CPP_ComponentProperty_set(this, 1431593192, value); }
}

export class CameraShakeVolumeComponent extends Component
{
  public static GetTypeNameHash(): number { return 3583911202; }
  get Strength(): number { return __CPP_ComponentProperty_get(this, 2169505375); }
  set Strength(value: number) { __CPP_ComponentProperty_set(this, 2169505375, value); }
  get BurstDuration(): number { return __CPP_ComponentProperty_get(this, 2218949438); }
  set BurstDuration(value: number) { __CPP_ComponentProperty_set(this, 2218949438, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 2338272115); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 2338272115, value); }
}

export class CameraShakeVolumeSphereComponent extends CameraShakeVolumeComponent
{
  public static GetTypeNameHash(): number { return 942545418; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 4141460905); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 4141460905, value); }
}

export class CharacterControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 3112505313; }
  RawMove(moveDeltaGlobal: Vec3): void { __CPP_ComponentFunction_Call(this, 1521956499, moveDeltaGlobal); }
  TeleportCharacter(globalFootPosition: Vec3): void { __CPP_ComponentFunction_Call(this, 750000664, globalFootPosition); }
  IsDestinationUnobstructed(globalFootPosition: Vec3, characterHeight: number): boolean { return __CPP_ComponentFunction_Call(this, 616316975, globalFootPosition, characterHeight); }
  IsTouchingGround(): boolean { return __CPP_ComponentFunction_Call(this, 1808559836); }
  IsCrouching(): boolean { return __CPP_ComponentFunction_Call(this, 2181286769); }
}

export class ClothSheetComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2038618985; }
  get Size(): Vec2 { return __CPP_ComponentProperty_get(this, 1535044600); }
  set Size(value: Vec2) { __CPP_ComponentProperty_set(this, 1535044600, value); }
  get Slack(): Vec2 { return __CPP_ComponentProperty_get(this, 2418804293); }
  set Slack(value: Vec2) { __CPP_ComponentProperty_set(this, 2418804293, value); }
  get Segments(): Vec2 { return __CPP_ComponentProperty_get(this, 4261242579); }
  set Segments(value: Vec2) { __CPP_ComponentProperty_set(this, 4261242579, value); }
  get Damping(): number { return __CPP_ComponentProperty_get(this, 2919761130); }
  set Damping(value: number) { __CPP_ComponentProperty_set(this, 2919761130, value); }
  get WindInfluence(): number { return __CPP_ComponentProperty_get(this, 410108310); }
  set WindInfluence(value: number) { __CPP_ComponentProperty_set(this, 410108310, value); }
  get Flags(): Flags.ClothSheetFlags { return __CPP_ComponentProperty_get(this, 2270926670); }
  set Flags(value: Flags.ClothSheetFlags) { __CPP_ComponentProperty_set(this, 2270926670, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 1765155854); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 1765155854, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1795206522); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1795206522, value); }
}

export class CollectionComponent extends Component
{
  public static GetTypeNameHash(): number { return 2151797431; }
  get Collection(): string { return __CPP_ComponentProperty_get(this, 71333475); }
  set Collection(value: string) { __CPP_ComponentProperty_set(this, 71333475, value); }
}

export class ColorAnimationComponent extends Component
{
  public static GetTypeNameHash(): number { return 3235151328; }
  get Gradient(): string { return __CPP_ComponentProperty_get(this, 1652583511); }
  set Gradient(value: string) { __CPP_ComponentProperty_set(this, 1652583511, value); }
  get Duration(): number { return __CPP_ComponentProperty_get(this, 1376963654); }
  set Duration(value: number) { __CPP_ComponentProperty_set(this, 1376963654, value); }
  get SetColorMode(): Enum.SetColorMode { return __CPP_ComponentProperty_get(this, 2284888800); }
  set SetColorMode(value: Enum.SetColorMode) { __CPP_ComponentProperty_set(this, 2284888800, value); }
  get AnimationMode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 2758131027); }
  set AnimationMode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 2758131027, value); }
  get RandomStartOffset(): boolean { return __CPP_ComponentProperty_get(this, 334208802); }
  set RandomStartOffset(value: boolean) { __CPP_ComponentProperty_set(this, 334208802, value); }
  get ApplyToChildren(): boolean { return __CPP_ComponentProperty_get(this, 246131742); }
  set ApplyToChildren(value: boolean) { __CPP_ComponentProperty_set(this, 246131742, value); }
}

export class CommentComponent extends Component
{
  public static GetTypeNameHash(): number { return 573871907; }
  get Comment(): string { return __CPP_ComponentProperty_get(this, 1844556397); }
  set Comment(value: string) { __CPP_ComponentProperty_set(this, 1844556397, value); }
}

export class CustomMeshComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2738157512; }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 2933443348); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 2933443348, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 3832456496); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 3832456496, value); }
}

export class DebugTextComponent extends Component
{
  public static GetTypeNameHash(): number { return 2723977654; }
  get Text(): string { return __CPP_ComponentProperty_get(this, 863465072); }
  set Text(value: string) { __CPP_ComponentProperty_set(this, 863465072, value); }
  get Value0(): number { return __CPP_ComponentProperty_get(this, 3221637408); }
  set Value0(value: number) { __CPP_ComponentProperty_set(this, 3221637408, value); }
  get Value1(): number { return __CPP_ComponentProperty_get(this, 702244519); }
  set Value1(value: number) { __CPP_ComponentProperty_set(this, 702244519, value); }
  get Value2(): number { return __CPP_ComponentProperty_get(this, 2442166806); }
  set Value2(value: number) { __CPP_ComponentProperty_set(this, 2442166806, value); }
  get Value3(): number { return __CPP_ComponentProperty_get(this, 1252400272); }
  set Value3(value: number) { __CPP_ComponentProperty_set(this, 1252400272, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3630230483); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3630230483, value); }
}

export class DecalComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 983092156; }
  get ProjectionAxis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 352416751); }
  set ProjectionAxis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 352416751, value); }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 2188175318); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 2188175318, value); }
  get SizeVariance(): number { return __CPP_ComponentProperty_get(this, 3528034643); }
  set SizeVariance(value: number) { __CPP_ComponentProperty_set(this, 3528034643, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3866587998); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3866587998, value); }
  get EmissiveColor(): Color { return __CPP_ComponentProperty_get(this, 2852122280); }
  set EmissiveColor(value: Color) { __CPP_ComponentProperty_set(this, 2852122280, value); }
  get SortOrder(): number { return __CPP_ComponentProperty_get(this, 3112784706); }
  set SortOrder(value: number) { __CPP_ComponentProperty_set(this, 3112784706, value); }
  get WrapAround(): boolean { return __CPP_ComponentProperty_get(this, 924515689); }
  set WrapAround(value: boolean) { __CPP_ComponentProperty_set(this, 924515689, value); }
  get MapNormalToGeometry(): boolean { return __CPP_ComponentProperty_get(this, 3076351345); }
  set MapNormalToGeometry(value: boolean) { __CPP_ComponentProperty_set(this, 3076351345, value); }
  get InnerFadeAngle(): number { return __CPP_ComponentProperty_get(this, 1009264849); }
  set InnerFadeAngle(value: number) { __CPP_ComponentProperty_set(this, 1009264849, value); }
  get OuterFadeAngle(): number { return __CPP_ComponentProperty_get(this, 3082294612); }
  set OuterFadeAngle(value: number) { __CPP_ComponentProperty_set(this, 3082294612, value); }
  get FadeOutDuration(): number { return __CPP_ComponentProperty_get(this, 3760624132); }
  set FadeOutDuration(value: number) { __CPP_ComponentProperty_set(this, 3760624132, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 1678918411); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 1678918411, value); }
  get ApplyToDynamic(): string { return __CPP_ComponentProperty_get(this, 905032583); }
  set ApplyToDynamic(value: string) { __CPP_ComponentProperty_set(this, 905032583, value); }
}

export class DeviceTrackingComponent extends Component
{
  public static GetTypeNameHash(): number { return 4275879866; }
  get DeviceType(): Enum.XRDeviceType { return __CPP_ComponentProperty_get(this, 667761022); }
  set DeviceType(value: Enum.XRDeviceType) { __CPP_ComponentProperty_set(this, 667761022, value); }
  get PoseLocation(): Enum.XRPoseLocation { return __CPP_ComponentProperty_get(this, 501806079); }
  set PoseLocation(value: Enum.XRPoseLocation) { __CPP_ComponentProperty_set(this, 501806079, value); }
  get TransformSpace(): Enum.XRTransformSpace { return __CPP_ComponentProperty_get(this, 667240293); }
  set TransformSpace(value: Enum.XRTransformSpace) { __CPP_ComponentProperty_set(this, 667240293, value); }
  get Rotation(): boolean { return __CPP_ComponentProperty_get(this, 2733131322); }
  set Rotation(value: boolean) { __CPP_ComponentProperty_set(this, 2733131322, value); }
  get Scale(): boolean { return __CPP_ComponentProperty_get(this, 399459184); }
  set Scale(value: boolean) { __CPP_ComponentProperty_set(this, 399459184, value); }
}

export class LightComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1439338306; }
  get LightColor(): Color { return __CPP_ComponentProperty_get(this, 4154499865); }
  set LightColor(value: Color) { __CPP_ComponentProperty_set(this, 4154499865, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 4044117805); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 4044117805, value); }
  get CastShadows(): boolean { return __CPP_ComponentProperty_get(this, 1558943583); }
  set CastShadows(value: boolean) { __CPP_ComponentProperty_set(this, 1558943583, value); }
  get PenumbraSize(): number { return __CPP_ComponentProperty_get(this, 1533011790); }
  set PenumbraSize(value: number) { __CPP_ComponentProperty_set(this, 1533011790, value); }
  get SlopeBias(): number { return __CPP_ComponentProperty_get(this, 1337449234); }
  set SlopeBias(value: number) { __CPP_ComponentProperty_set(this, 1337449234, value); }
  get ConstantBias(): number { return __CPP_ComponentProperty_get(this, 2641885552); }
  set ConstantBias(value: number) { __CPP_ComponentProperty_set(this, 2641885552, value); }
}

export class DirectionalLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 2658649719; }
  get NumCascades(): number { return __CPP_ComponentProperty_get(this, 2369816287); }
  set NumCascades(value: number) { __CPP_ComponentProperty_set(this, 2369816287, value); }
  get MinShadowRange(): number { return __CPP_ComponentProperty_get(this, 3418341267); }
  set MinShadowRange(value: number) { __CPP_ComponentProperty_set(this, 3418341267, value); }
  get FadeOutStart(): number { return __CPP_ComponentProperty_get(this, 3895200017); }
  set FadeOutStart(value: number) { __CPP_ComponentProperty_set(this, 3895200017, value); }
  get SplitModeWeight(): number { return __CPP_ComponentProperty_get(this, 2251224340); }
  set SplitModeWeight(value: number) { __CPP_ComponentProperty_set(this, 2251224340, value); }
  get NearPlaneOffset(): number { return __CPP_ComponentProperty_get(this, 3218588368); }
  set NearPlaneOffset(value: number) { __CPP_ComponentProperty_set(this, 3218588368, value); }
}

export class EventMessageHandlerComponent extends Component
{
  public static GetTypeNameHash(): number { return 1332182870; }
  get HandleGlobalEvents(): boolean { return __CPP_ComponentProperty_get(this, 405796649); }
  set HandleGlobalEvents(value: boolean) { __CPP_ComponentProperty_set(this, 405796649, value); }
  get PassThroughUnhandledEvents(): boolean { return __CPP_ComponentProperty_get(this, 3404445410); }
  set PassThroughUnhandledEvents(value: boolean) { __CPP_ComponentProperty_set(this, 3404445410, value); }
}

export class FakeRopeComponent extends Component
{
  public static GetTypeNameHash(): number { return 1125940395; }
  get Anchor(): string { return __CPP_ComponentProperty_get(this, 3139752710); }
  set Anchor(value: string) { __CPP_ComponentProperty_set(this, 3139752710, value); }
  get AttachToOrigin(): boolean { return __CPP_ComponentProperty_get(this, 4135736524); }
  set AttachToOrigin(value: boolean) { __CPP_ComponentProperty_set(this, 4135736524, value); }
  get AttachToAnchor(): boolean { return __CPP_ComponentProperty_get(this, 3147025865); }
  set AttachToAnchor(value: boolean) { __CPP_ComponentProperty_set(this, 3147025865, value); }
  get Pieces(): number { return __CPP_ComponentProperty_get(this, 3826877440); }
  set Pieces(value: number) { __CPP_ComponentProperty_set(this, 3826877440, value); }
  get Slack(): number { return __CPP_ComponentProperty_get(this, 1825466326); }
  set Slack(value: number) { __CPP_ComponentProperty_set(this, 1825466326, value); }
  get Damping(): number { return __CPP_ComponentProperty_get(this, 1248812964); }
  set Damping(value: number) { __CPP_ComponentProperty_set(this, 1248812964, value); }
  get WindInfluence(): number { return __CPP_ComponentProperty_get(this, 1173069787); }
  set WindInfluence(value: number) { __CPP_ComponentProperty_set(this, 1173069787, value); }
}

export class FogComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 76257912; }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3497990124); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3497990124, value); }
  get Density(): number { return __CPP_ComponentProperty_get(this, 4260284794); }
  set Density(value: number) { __CPP_ComponentProperty_set(this, 4260284794, value); }
  get HeightFalloff(): number { return __CPP_ComponentProperty_get(this, 78075410); }
  set HeightFalloff(value: number) { __CPP_ComponentProperty_set(this, 78075410, value); }
  get ModulateWithSkyColor(): boolean { return __CPP_ComponentProperty_get(this, 1567904676); }
  set ModulateWithSkyColor(value: boolean) { __CPP_ComponentProperty_set(this, 1567904676, value); }
  get SkyDistance(): number { return __CPP_ComponentProperty_get(this, 2069465566); }
  set SkyDistance(value: number) { __CPP_ComponentProperty_set(this, 2069465566, value); }
}

export class FollowPathComponent extends Component
{
  public static GetTypeNameHash(): number { return 1924203800; }
  SetDirectionForwards(Forwards: boolean): void { __CPP_ComponentFunction_Call(this, 1431908031, Forwards); }
  IsDirectionForwards(): boolean { return __CPP_ComponentFunction_Call(this, 3942280336); }
  ToggleDirection(): void { __CPP_ComponentFunction_Call(this, 400298289); }
  get Path(): string { return __CPP_ComponentProperty_get(this, 4294635661); }
  set Path(value: string) { __CPP_ComponentProperty_set(this, 4294635661, value); }
  get StartDistance(): number { return __CPP_ComponentProperty_get(this, 1555113697); }
  set StartDistance(value: number) { __CPP_ComponentProperty_set(this, 1555113697, value); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 2518314482); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 2518314482, value); }
  get Mode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 2871645551); }
  set Mode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 2871645551, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 42656182); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 42656182, value); }
  get LookAhead(): number { return __CPP_ComponentProperty_get(this, 4096587980); }
  set LookAhead(value: number) { __CPP_ComponentProperty_set(this, 4096587980, value); }
  get Smoothing(): number { return __CPP_ComponentProperty_get(this, 1570493541); }
  set Smoothing(value: number) { __CPP_ComponentProperty_set(this, 1570493541, value); }
}

export class ForwardEventsToGameStateComponent extends EventMessageHandlerComponent
{
  public static GetTypeNameHash(): number { return 4180057688; }
}

export class MeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 2065727025; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 4090202102); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 4090202102, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3860786668); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3860786668, value); }
}

export class GizmoComponent extends MeshComponent
{
  public static GetTypeNameHash(): number { return 1143891395; }
}

export class GrabbableItemComponent extends Component
{
  public static GetTypeNameHash(): number { return 3249805768; }
}

export class GreyBoxComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2928082544; }
  get Shape(): Enum.GreyBoxShape { return __CPP_ComponentProperty_get(this, 4196188061); }
  set Shape(value: Enum.GreyBoxShape) { __CPP_ComponentProperty_set(this, 4196188061, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 1177924264); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 1177924264, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1520567237); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1520567237, value); }
  get SizeNegX(): number { return __CPP_ComponentProperty_get(this, 676799245); }
  set SizeNegX(value: number) { __CPP_ComponentProperty_set(this, 676799245, value); }
  get SizePosX(): number { return __CPP_ComponentProperty_get(this, 2468021494); }
  set SizePosX(value: number) { __CPP_ComponentProperty_set(this, 2468021494, value); }
  get SizeNegY(): number { return __CPP_ComponentProperty_get(this, 3769079994); }
  set SizeNegY(value: number) { __CPP_ComponentProperty_set(this, 3769079994, value); }
  get SizePosY(): number { return __CPP_ComponentProperty_get(this, 2978699739); }
  set SizePosY(value: number) { __CPP_ComponentProperty_set(this, 2978699739, value); }
  get SizeNegZ(): number { return __CPP_ComponentProperty_get(this, 220544185); }
  set SizeNegZ(value: number) { __CPP_ComponentProperty_set(this, 220544185, value); }
  get SizePosZ(): number { return __CPP_ComponentProperty_get(this, 3675566558); }
  set SizePosZ(value: number) { __CPP_ComponentProperty_set(this, 3675566558, value); }
  get Detail(): number { return __CPP_ComponentProperty_get(this, 408251963); }
  set Detail(value: number) { __CPP_ComponentProperty_set(this, 408251963, value); }
  get Curvature(): number { return __CPP_ComponentProperty_get(this, 217225231); }
  set Curvature(value: number) { __CPP_ComponentProperty_set(this, 217225231, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 1699504306); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 1699504306, value); }
  get SlopedTop(): boolean { return __CPP_ComponentProperty_get(this, 203374429); }
  set SlopedTop(value: boolean) { __CPP_ComponentProperty_set(this, 203374429, value); }
  get SlopedBottom(): boolean { return __CPP_ComponentProperty_get(this, 820496028); }
  set SlopedBottom(value: boolean) { __CPP_ComponentProperty_set(this, 820496028, value); }
  get GenerateCollision(): boolean { return __CPP_ComponentProperty_get(this, 3437978858); }
  set GenerateCollision(value: boolean) { __CPP_ComponentProperty_set(this, 3437978858, value); }
  get IncludeInNavmesh(): boolean { return __CPP_ComponentProperty_get(this, 365487733); }
  set IncludeInNavmesh(value: boolean) { __CPP_ComponentProperty_set(this, 365487733, value); }
  get UseAsOccluder(): boolean { return __CPP_ComponentProperty_get(this, 378302686); }
  set UseAsOccluder(value: boolean) { __CPP_ComponentProperty_set(this, 378302686, value); }
}

export class HeadBoneComponent extends Component
{
  public static GetTypeNameHash(): number { return 2222111991; }
  SetVerticalRotation(Radians: number): void { __CPP_ComponentFunction_Call(this, 3525291373, Radians); }
  ChangeVerticalRotation(Radians: number): void { __CPP_ComponentFunction_Call(this, 1806356363, Radians); }
  get VerticalRotation(): number { return __CPP_ComponentProperty_get(this, 3468825540); }
  set VerticalRotation(value: number) { __CPP_ComponentProperty_set(this, 3468825540, value); }
}

export class HeightfieldComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 787736282; }
  get HeightfieldImage(): string { return __CPP_ComponentProperty_get(this, 3254056213); }
  set HeightfieldImage(value: string) { __CPP_ComponentProperty_set(this, 3254056213, value); }
  get Material(): string { return __CPP_ComponentProperty_get(this, 114288145); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 114288145, value); }
  get HalfExtents(): Vec2 { return __CPP_ComponentProperty_get(this, 165911619); }
  set HalfExtents(value: Vec2) { __CPP_ComponentProperty_set(this, 165911619, value); }
  get Height(): number { return __CPP_ComponentProperty_get(this, 136047984); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 136047984, value); }
  get Tesselation(): Vec2 { return __CPP_ComponentProperty_get(this, 1750272738); }
  set Tesselation(value: Vec2) { __CPP_ComponentProperty_set(this, 1750272738, value); }
  get TexCoordOffset(): Vec2 { return __CPP_ComponentProperty_get(this, 1384177215); }
  set TexCoordOffset(value: Vec2) { __CPP_ComponentProperty_set(this, 1384177215, value); }
  get TexCoordScale(): Vec2 { return __CPP_ComponentProperty_get(this, 2082486491); }
  set TexCoordScale(value: Vec2) { __CPP_ComponentProperty_set(this, 2082486491, value); }
  get GenerateCollision(): boolean { return __CPP_ComponentProperty_get(this, 628860466); }
  set GenerateCollision(value: boolean) { __CPP_ComponentProperty_set(this, 628860466, value); }
  get ColMeshTesselation(): Vec2 { return __CPP_ComponentProperty_get(this, 2208447829); }
  set ColMeshTesselation(value: Vec2) { __CPP_ComponentProperty_set(this, 2208447829, value); }
  get IncludeInNavmesh(): boolean { return __CPP_ComponentProperty_get(this, 1698485575); }
  set IncludeInNavmesh(value: boolean) { __CPP_ComponentProperty_set(this, 1698485575, value); }
}

export class InputComponent extends Component
{
  public static GetTypeNameHash(): number { return 255849684; }
  GetCurrentInputState(InputAction: string, OnlyKeyPressed: boolean): number { return __CPP_ComponentFunction_Call(this, 1109218206, InputAction, OnlyKeyPressed); }
  get InputSet(): string { return __CPP_ComponentProperty_get(this, 211356444); }
  set InputSet(value: string) { __CPP_ComponentProperty_set(this, 211356444, value); }
  get Granularity(): Enum.InputMessageGranularity { return __CPP_ComponentProperty_get(this, 2567221569); }
  set Granularity(value: Enum.InputMessageGranularity) { __CPP_ComponentProperty_set(this, 2567221569, value); }
  get ForwardToBlackboard(): boolean { return __CPP_ComponentProperty_get(this, 414380121); }
  set ForwardToBlackboard(value: boolean) { __CPP_ComponentProperty_set(this, 414380121, value); }
}

export class InstancedMeshComponent extends MeshComponentBase
{
  public static GetTypeNameHash(): number { return 3141474604; }
  get Mesh(): string { return __CPP_ComponentProperty_get(this, 3632374394); }
  set Mesh(value: string) { __CPP_ComponentProperty_set(this, 3632374394, value); }
  get MainColor(): Color { return __CPP_ComponentProperty_get(this, 979486309); }
  set MainColor(value: Color) { __CPP_ComponentProperty_set(this, 979486309, value); }
}

export class JointAttachmentComponent extends Component
{
  public static GetTypeNameHash(): number { return 212574802; }
  get JointName(): string { return __CPP_ComponentProperty_get(this, 523421749); }
  set JointName(value: string) { __CPP_ComponentProperty_set(this, 523421749, value); }
  get PositionOffset(): Vec3 { return __CPP_ComponentProperty_get(this, 3067783476); }
  set PositionOffset(value: Vec3) { __CPP_ComponentProperty_set(this, 3067783476, value); }
  get RotationOffset(): Quat { return __CPP_ComponentProperty_get(this, 1359303873); }
  set RotationOffset(value: Quat) { __CPP_ComponentProperty_set(this, 1359303873, value); }
}

export class JointOverrideComponent extends Component
{
  public static GetTypeNameHash(): number { return 2801369375; }
  get JointName(): string { return __CPP_ComponentProperty_get(this, 3163273189); }
  set JointName(value: string) { __CPP_ComponentProperty_set(this, 3163273189, value); }
  get OverridePosition(): boolean { return __CPP_ComponentProperty_get(this, 2914491193); }
  set OverridePosition(value: boolean) { __CPP_ComponentProperty_set(this, 2914491193, value); }
  get OverrideRotation(): boolean { return __CPP_ComponentProperty_get(this, 1071381918); }
  set OverrideRotation(value: boolean) { __CPP_ComponentProperty_set(this, 1071381918, value); }
  get OverrideScale(): boolean { return __CPP_ComponentProperty_get(this, 4255149825); }
  set OverrideScale(value: boolean) { __CPP_ComponentProperty_set(this, 4255149825, value); }
}

export class JoltActorComponent extends Component
{
  public static GetTypeNameHash(): number { return 2937306467; }
  GetObjectFilterID(): number { return __CPP_ComponentFunction_Call(this, 610921474); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 740086728); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 740086728, value); }
}

export class JoltBoneColliderComponent extends Component
{
  public static GetTypeNameHash(): number { return 1672607970; }
  GetObjectFilterID(): number { return __CPP_ComponentFunction_Call(this, 238984935); }
  RecreatePhysicsShapes(): void { __CPP_ComponentFunction_Call(this, 4223514834); }
  get QueryShapeOnly(): boolean { return __CPP_ComponentProperty_get(this, 4086345316); }
  set QueryShapeOnly(value: boolean) { __CPP_ComponentProperty_set(this, 4086345316, value); }
  get UpdateThreshold(): number { return __CPP_ComponentProperty_get(this, 938466671); }
  set UpdateThreshold(value: number) { __CPP_ComponentProperty_set(this, 938466671, value); }
}

export class JoltCharacterControllerComponent extends Component
{
  public static GetTypeNameHash(): number { return 3764660311; }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 1475227981); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 1475227981, value); }
  get PresenceCollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2199811767); }
  set PresenceCollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2199811767, value); }
  get Mass(): number { return __CPP_ComponentProperty_get(this, 1718098670); }
  set Mass(value: number) { __CPP_ComponentProperty_set(this, 1718098670, value); }
  get Strength(): number { return __CPP_ComponentProperty_get(this, 465789663); }
  set Strength(value: number) { __CPP_ComponentProperty_set(this, 465789663, value); }
  get MaxClimbingSlope(): number { return __CPP_ComponentProperty_get(this, 533355687); }
  set MaxClimbingSlope(value: number) { __CPP_ComponentProperty_set(this, 533355687, value); }
  get DebugFlags(): Flags.JoltCharacterDebugFlags { return __CPP_ComponentProperty_get(this, 1203874381); }
  set DebugFlags(value: Flags.JoltCharacterDebugFlags) { __CPP_ComponentProperty_set(this, 1203874381, value); }
}

export class JoltConstraintComponent extends Component
{
  public static GetTypeNameHash(): number { return 773143640; }
  get PairCollision(): boolean { return __CPP_ComponentProperty_get(this, 2264100017); }
  set PairCollision(value: boolean) { __CPP_ComponentProperty_set(this, 2264100017, value); }
  get ParentActor(): string { return __CPP_ComponentProperty_get(this, 1129797476); }
  set ParentActor(value: string) { __CPP_ComponentProperty_set(this, 1129797476, value); }
  get ChildActor(): string { return __CPP_ComponentProperty_get(this, 228270348); }
  set ChildActor(value: string) { __CPP_ComponentProperty_set(this, 228270348, value); }
  get ChildActorAnchor(): string { return __CPP_ComponentProperty_get(this, 348046908); }
  set ChildActorAnchor(value: string) { __CPP_ComponentProperty_set(this, 348046908, value); }
  get BreakForce(): number { return __CPP_ComponentProperty_get(this, 1505694784); }
  set BreakForce(value: number) { __CPP_ComponentProperty_set(this, 1505694784, value); }
  get BreakTorque(): number { return __CPP_ComponentProperty_get(this, 894494542); }
  set BreakTorque(value: number) { __CPP_ComponentProperty_set(this, 894494542, value); }
}

export class JoltConeConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 240683941; }
  get ConeAngle(): number { return __CPP_ComponentProperty_get(this, 2542275323); }
  set ConeAngle(value: number) { __CPP_ComponentProperty_set(this, 2542275323, value); }
}

export class JoltDefaultCharacterComponent extends JoltCharacterControllerComponent
{
  public static GetTypeNameHash(): number { return 3632287720; }
  TeleportCharacter(globalFootPosition: Vec3): void { __CPP_ComponentFunction_Call(this, 1528433929, globalFootPosition); }
  IsStandingOnGround(): boolean { return __CPP_ComponentFunction_Call(this, 469459153); }
  IsSlidingOnGround(): boolean { return __CPP_ComponentFunction_Call(this, 1957534750); }
  IsInAir(): boolean { return __CPP_ComponentFunction_Call(this, 1163858012); }
  IsCrouching(): boolean { return __CPP_ComponentFunction_Call(this, 3222265635); }
  get ShapeRadius(): number { return __CPP_ComponentProperty_get(this, 3171318870); }
  set ShapeRadius(value: number) { __CPP_ComponentProperty_set(this, 3171318870, value); }
  get CrouchHeight(): number { return __CPP_ComponentProperty_get(this, 4164395782); }
  set CrouchHeight(value: number) { __CPP_ComponentProperty_set(this, 4164395782, value); }
  get StandHeight(): number { return __CPP_ComponentProperty_get(this, 1438019332); }
  set StandHeight(value: number) { __CPP_ComponentProperty_set(this, 1438019332, value); }
  get FootRadius(): number { return __CPP_ComponentProperty_get(this, 2617005198); }
  set FootRadius(value: number) { __CPP_ComponentProperty_set(this, 2617005198, value); }
  get WalkSpeedCrouching(): number { return __CPP_ComponentProperty_get(this, 2169888260); }
  set WalkSpeedCrouching(value: number) { __CPP_ComponentProperty_set(this, 2169888260, value); }
  get WalkSpeedStanding(): number { return __CPP_ComponentProperty_get(this, 2209048731); }
  set WalkSpeedStanding(value: number) { __CPP_ComponentProperty_set(this, 2209048731, value); }
  get WalkSpeedRunning(): number { return __CPP_ComponentProperty_get(this, 192690781); }
  set WalkSpeedRunning(value: number) { __CPP_ComponentProperty_set(this, 192690781, value); }
  get AirSpeed(): number { return __CPP_ComponentProperty_get(this, 2436456345); }
  set AirSpeed(value: number) { __CPP_ComponentProperty_set(this, 2436456345, value); }
  get AirFriction(): number { return __CPP_ComponentProperty_get(this, 2934198725); }
  set AirFriction(value: number) { __CPP_ComponentProperty_set(this, 2934198725, value); }
  get MaxStepUp(): number { return __CPP_ComponentProperty_get(this, 454978396); }
  set MaxStepUp(value: number) { __CPP_ComponentProperty_set(this, 454978396, value); }
  get MaxStepDown(): number { return __CPP_ComponentProperty_get(this, 1916184448); }
  set MaxStepDown(value: number) { __CPP_ComponentProperty_set(this, 1916184448, value); }
  get JumpImpulse(): number { return __CPP_ComponentProperty_get(this, 2848928172); }
  set JumpImpulse(value: number) { __CPP_ComponentProperty_set(this, 2848928172, value); }
  get RotateSpeed(): number { return __CPP_ComponentProperty_get(this, 3423547920); }
  set RotateSpeed(value: number) { __CPP_ComponentProperty_set(this, 3423547920, value); }
  get WalkSurfaceInteraction(): string { return __CPP_ComponentProperty_get(this, 2368522008); }
  set WalkSurfaceInteraction(value: string) { __CPP_ComponentProperty_set(this, 2368522008, value); }
  get WalkInteractionDistance(): number { return __CPP_ComponentProperty_get(this, 3641864001); }
  set WalkInteractionDistance(value: number) { __CPP_ComponentProperty_set(this, 3641864001, value); }
  get RunInteractionDistance(): number { return __CPP_ComponentProperty_get(this, 2511512839); }
  set RunInteractionDistance(value: number) { __CPP_ComponentProperty_set(this, 2511512839, value); }
  get FallbackWalkSurface(): string { return __CPP_ComponentProperty_get(this, 3478044387); }
  set FallbackWalkSurface(value: string) { __CPP_ComponentProperty_set(this, 3478044387, value); }
  get HeadObject(): string { return __CPP_ComponentProperty_get(this, 2480180332); }
  set HeadObject(value: string) { __CPP_ComponentProperty_set(this, 2480180332, value); }
}

export class JoltDistanceConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 552233876; }
  get MinDistance(): number { return __CPP_ComponentProperty_get(this, 279008283); }
  set MinDistance(value: number) { __CPP_ComponentProperty_set(this, 279008283, value); }
  get MaxDistance(): number { return __CPP_ComponentProperty_get(this, 1166380826); }
  set MaxDistance(value: number) { __CPP_ComponentProperty_set(this, 1166380826, value); }
  get Frequency(): number { return __CPP_ComponentProperty_get(this, 482694170); }
  set Frequency(value: number) { __CPP_ComponentProperty_set(this, 482694170, value); }
  get Damping(): number { return __CPP_ComponentProperty_get(this, 4075375158); }
  set Damping(value: number) { __CPP_ComponentProperty_set(this, 4075375158, value); }
}

export class JoltDynamicActorComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 4104408928; }
  AddLinearForce(vForce: Vec3): void { __CPP_ComponentFunction_Call(this, 2294284736, vForce); }
  AddLinearImpulse(vImpulse: Vec3): void { __CPP_ComponentFunction_Call(this, 209938645, vImpulse); }
  AddAngularForce(vForce: Vec3): void { __CPP_ComponentFunction_Call(this, 501554862, vForce); }
  AddAngularImpulse(vImpulse: Vec3): void { __CPP_ComponentFunction_Call(this, 483840172, vImpulse); }
  get Kinematic(): boolean { return __CPP_ComponentProperty_get(this, 2220828805); }
  set Kinematic(value: boolean) { __CPP_ComponentProperty_set(this, 2220828805, value); }
  get StartAsleep(): boolean { return __CPP_ComponentProperty_get(this, 1166068611); }
  set StartAsleep(value: boolean) { __CPP_ComponentProperty_set(this, 1166068611, value); }
  get Mass(): number { return __CPP_ComponentProperty_get(this, 250514690); }
  set Mass(value: number) { __CPP_ComponentProperty_set(this, 250514690, value); }
  get Density(): number { return __CPP_ComponentProperty_get(this, 2304352080); }
  set Density(value: number) { __CPP_ComponentProperty_set(this, 2304352080, value); }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 402421502); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 402421502, value); }
  get GravityFactor(): number { return __CPP_ComponentProperty_get(this, 625792614); }
  set GravityFactor(value: number) { __CPP_ComponentProperty_set(this, 625792614, value); }
  get LinearDamping(): number { return __CPP_ComponentProperty_get(this, 944079157); }
  set LinearDamping(value: number) { __CPP_ComponentProperty_set(this, 944079157, value); }
  get AngularDamping(): number { return __CPP_ComponentProperty_get(this, 3339823849); }
  set AngularDamping(value: number) { __CPP_ComponentProperty_set(this, 3339823849, value); }
  get ContinuousCollisionDetection(): boolean { return __CPP_ComponentProperty_get(this, 1011834748); }
  set ContinuousCollisionDetection(value: boolean) { __CPP_ComponentProperty_set(this, 1011834748, value); }
  get OnContact(): Flags.OnJoltContact { return __CPP_ComponentProperty_get(this, 2249561041); }
  set OnContact(value: Flags.OnJoltContact) { __CPP_ComponentProperty_set(this, 2249561041, value); }
  get CustomCenterOfMass(): boolean { return __CPP_ComponentProperty_get(this, 505272282); }
  set CustomCenterOfMass(value: boolean) { __CPP_ComponentProperty_set(this, 505272282, value); }
  get CenterOfMass(): Vec3 { return __CPP_ComponentProperty_get(this, 1793184913); }
  set CenterOfMass(value: Vec3) { __CPP_ComponentProperty_set(this, 1793184913, value); }
}

export class JoltFixedConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 523441689; }
}

export class JoltGrabObjectComponent extends Component
{
  public static GetTypeNameHash(): number { return 4200734405; }
  GrabNearbyObject(): boolean { return __CPP_ComponentFunction_Call(this, 1929621860); }
  HasObjectGrabbed(): boolean { return __CPP_ComponentFunction_Call(this, 714336495); }
  DropGrabbedObject(): void { __CPP_ComponentFunction_Call(this, 3003911390); }
  ThrowGrabbedObject(Direction: Vec3): void { __CPP_ComponentFunction_Call(this, 575483271, Direction); }
  BreakObjectGrab(): void { __CPP_ComponentFunction_Call(this, 46967704); }
  get MaxGrabPointDistance(): number { return __CPP_ComponentProperty_get(this, 3286674274); }
  set MaxGrabPointDistance(value: number) { __CPP_ComponentProperty_set(this, 3286674274, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 1054445401); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 1054445401, value); }
  get SpringStiffness(): number { return __CPP_ComponentProperty_get(this, 3439014566); }
  set SpringStiffness(value: number) { __CPP_ComponentProperty_set(this, 3439014566, value); }
  get SpringDamping(): number { return __CPP_ComponentProperty_get(this, 2301270404); }
  set SpringDamping(value: number) { __CPP_ComponentProperty_set(this, 2301270404, value); }
  get BreakDistance(): number { return __CPP_ComponentProperty_get(this, 1789484249); }
  set BreakDistance(value: number) { __CPP_ComponentProperty_set(this, 1789484249, value); }
  get AttachTo(): string { return __CPP_ComponentProperty_get(this, 563255634); }
  set AttachTo(value: string) { __CPP_ComponentProperty_set(this, 563255634, value); }
  get GrabAnyObjectWithSize(): number { return __CPP_ComponentProperty_get(this, 3562448238); }
  set GrabAnyObjectWithSize(value: number) { __CPP_ComponentProperty_set(this, 3562448238, value); }
}

export class JoltHingeConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 478581588; }
  get LimitMode(): Enum.JoltConstraintLimitMode { return __CPP_ComponentProperty_get(this, 1915971363); }
  set LimitMode(value: Enum.JoltConstraintLimitMode) { __CPP_ComponentProperty_set(this, 1915971363, value); }
  get LowerLimit(): number { return __CPP_ComponentProperty_get(this, 1968448980); }
  set LowerLimit(value: number) { __CPP_ComponentProperty_set(this, 1968448980, value); }
  get UpperLimit(): number { return __CPP_ComponentProperty_get(this, 21916689); }
  set UpperLimit(value: number) { __CPP_ComponentProperty_set(this, 21916689, value); }
  get Friction(): number { return __CPP_ComponentProperty_get(this, 201227546); }
  set Friction(value: number) { __CPP_ComponentProperty_set(this, 201227546, value); }
  get DriveMode(): Enum.JoltConstraintDriveMode { return __CPP_ComponentProperty_get(this, 3495506509); }
  set DriveMode(value: Enum.JoltConstraintDriveMode) { __CPP_ComponentProperty_set(this, 3495506509, value); }
  get DriveTargetValue(): number { return __CPP_ComponentProperty_get(this, 2118436186); }
  set DriveTargetValue(value: number) { __CPP_ComponentProperty_set(this, 2118436186, value); }
  get DriveStrength(): number { return __CPP_ComponentProperty_get(this, 2062739827); }
  set DriveStrength(value: number) { __CPP_ComponentProperty_set(this, 2062739827, value); }
}

export class JoltPointConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 1031922681; }
}

export class JoltQueryShapeActorComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 1100220465; }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 1022727374); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 1022727374, value); }
}

export class JoltRagdollComponent extends Component
{
  public static GetTypeNameHash(): number { return 2874744952; }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2237631802); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2237631802, value); }
  get SelfCollision(): boolean { return __CPP_ComponentProperty_get(this, 946708635); }
  set SelfCollision(value: boolean) { __CPP_ComponentProperty_set(this, 946708635, value); }
  get Start(): Enum.JoltRagdollStart { return __CPP_ComponentProperty_get(this, 1948049686); }
  set Start(value: Enum.JoltRagdollStart) { __CPP_ComponentProperty_set(this, 1948049686, value); }
  get GravityFactor(): number { return __CPP_ComponentProperty_get(this, 279948301); }
  set GravityFactor(value: number) { __CPP_ComponentProperty_set(this, 279948301, value); }
  get Stiffness(): number { return __CPP_ComponentProperty_get(this, 622718422); }
  set Stiffness(value: number) { __CPP_ComponentProperty_set(this, 622718422, value); }
}

export class JoltRopeComponent extends Component
{
  public static GetTypeNameHash(): number { return 2429639235; }
  get Anchor(): string { return __CPP_ComponentProperty_get(this, 281468808); }
  set Anchor(value: string) { __CPP_ComponentProperty_set(this, 281468808, value); }
  get AttachToOrigin(): boolean { return __CPP_ComponentProperty_get(this, 1429653373); }
  set AttachToOrigin(value: boolean) { __CPP_ComponentProperty_set(this, 1429653373, value); }
  get AttachToAnchor(): boolean { return __CPP_ComponentProperty_get(this, 371016278); }
  set AttachToAnchor(value: boolean) { __CPP_ComponentProperty_set(this, 371016278, value); }
  get Pieces(): number { return __CPP_ComponentProperty_get(this, 1366700672); }
  set Pieces(value: number) { __CPP_ComponentProperty_set(this, 1366700672, value); }
  get Slack(): number { return __CPP_ComponentProperty_get(this, 1126868948); }
  set Slack(value: number) { __CPP_ComponentProperty_set(this, 1126868948, value); }
  get Mass(): number { return __CPP_ComponentProperty_get(this, 1457797139); }
  set Mass(value: number) { __CPP_ComponentProperty_set(this, 1457797139, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 3042122999); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 3042122999, value); }
  get BendStiffness(): number { return __CPP_ComponentProperty_get(this, 1411544602); }
  set BendStiffness(value: number) { __CPP_ComponentProperty_set(this, 1411544602, value); }
  get MaxBend(): number { return __CPP_ComponentProperty_get(this, 1991375586); }
  set MaxBend(value: number) { __CPP_ComponentProperty_set(this, 1991375586, value); }
  get MaxTwist(): number { return __CPP_ComponentProperty_get(this, 2227446129); }
  set MaxTwist(value: number) { __CPP_ComponentProperty_set(this, 2227446129, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 3362527349); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 3362527349, value); }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 2460791796); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 2460791796, value); }
  get GravityFactor(): number { return __CPP_ComponentProperty_get(this, 1491185591); }
  set GravityFactor(value: number) { __CPP_ComponentProperty_set(this, 1491185591, value); }
  get SelfCollision(): boolean { return __CPP_ComponentProperty_get(this, 2102776933); }
  set SelfCollision(value: boolean) { __CPP_ComponentProperty_set(this, 2102776933, value); }
  get ContinuousCollisionDetection(): boolean { return __CPP_ComponentProperty_get(this, 1486706576); }
  set ContinuousCollisionDetection(value: boolean) { __CPP_ComponentProperty_set(this, 1486706576, value); }
}

export class JoltSettingsComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 2369657841; }
  get ObjectGravity(): Vec3 { return __CPP_ComponentProperty_get(this, 1256142618); }
  set ObjectGravity(value: Vec3) { __CPP_ComponentProperty_set(this, 1256142618, value); }
  get CharacterGravity(): Vec3 { return __CPP_ComponentProperty_get(this, 1207993252); }
  set CharacterGravity(value: Vec3) { __CPP_ComponentProperty_set(this, 1207993252, value); }
  get SteppingMode(): Enum.JoltSteppingMode { return __CPP_ComponentProperty_get(this, 553568236); }
  set SteppingMode(value: Enum.JoltSteppingMode) { __CPP_ComponentProperty_set(this, 553568236, value); }
  get FixedFrameRate(): number { return __CPP_ComponentProperty_get(this, 2319772423); }
  set FixedFrameRate(value: number) { __CPP_ComponentProperty_set(this, 2319772423, value); }
  get MaxSubSteps(): number { return __CPP_ComponentProperty_get(this, 2656748254); }
  set MaxSubSteps(value: number) { __CPP_ComponentProperty_set(this, 2656748254, value); }
  get MaxBodies(): number { return __CPP_ComponentProperty_get(this, 435026282); }
  set MaxBodies(value: number) { __CPP_ComponentProperty_set(this, 435026282, value); }
}

export class JoltShapeComponent extends Component
{
  public static GetTypeNameHash(): number { return 992979895; }
}

export class JoltShapeBoxComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 418524197; }
  get HalfExtents(): Vec3 { return __CPP_ComponentProperty_get(this, 4122838162); }
  set HalfExtents(value: Vec3) { __CPP_ComponentProperty_set(this, 4122838162, value); }
}

export class JoltShapeCapsuleComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 2386067973; }
  get Height(): number { return __CPP_ComponentProperty_get(this, 417688903); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 417688903, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 4121953793); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 4121953793, value); }
}

export class JoltShapeConvexHullComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 3780503080; }
  get CollisionMesh(): string { return __CPP_ComponentProperty_get(this, 2729032316); }
  set CollisionMesh(value: string) { __CPP_ComponentProperty_set(this, 2729032316, value); }
}

export class JoltShapeCylinderComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 4165295694; }
  get Height(): number { return __CPP_ComponentProperty_get(this, 3993727202); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 3993727202, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3410743629); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3410743629, value); }
}

export class JoltShapeSphereComponent extends JoltShapeComponent
{
  public static GetTypeNameHash(): number { return 2718607246; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 4166084588); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 4166084588, value); }
}

export class JoltSliderConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 886892542; }
  get LimitMode(): Enum.JoltConstraintLimitMode { return __CPP_ComponentProperty_get(this, 1301660513); }
  set LimitMode(value: Enum.JoltConstraintLimitMode) { __CPP_ComponentProperty_set(this, 1301660513, value); }
  get LowerLimit(): number { return __CPP_ComponentProperty_get(this, 1185869913); }
  set LowerLimit(value: number) { __CPP_ComponentProperty_set(this, 1185869913, value); }
  get UpperLimit(): number { return __CPP_ComponentProperty_get(this, 2793528505); }
  set UpperLimit(value: number) { __CPP_ComponentProperty_set(this, 2793528505, value); }
  get Friction(): number { return __CPP_ComponentProperty_get(this, 4009909394); }
  set Friction(value: number) { __CPP_ComponentProperty_set(this, 4009909394, value); }
  get DriveMode(): Enum.JoltConstraintDriveMode { return __CPP_ComponentProperty_get(this, 492510767); }
  set DriveMode(value: Enum.JoltConstraintDriveMode) { __CPP_ComponentProperty_set(this, 492510767, value); }
  get DriveTargetValue(): number { return __CPP_ComponentProperty_get(this, 2439858986); }
  set DriveTargetValue(value: number) { __CPP_ComponentProperty_set(this, 2439858986, value); }
  get DriveStrength(): number { return __CPP_ComponentProperty_get(this, 1739436067); }
  set DriveStrength(value: number) { __CPP_ComponentProperty_set(this, 1739436067, value); }
}

export class JoltStaticActorComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 3334252091; }
  get CollisionMesh(): string { return __CPP_ComponentProperty_get(this, 2259890688); }
  set CollisionMesh(value: string) { __CPP_ComponentProperty_set(this, 2259890688, value); }
  get IncludeInNavmesh(): boolean { return __CPP_ComponentProperty_get(this, 3531167504); }
  set IncludeInNavmesh(value: boolean) { __CPP_ComponentProperty_set(this, 3531167504, value); }
  get PullSurfacesFromGraphicsMesh(): boolean { return __CPP_ComponentProperty_get(this, 3241658829); }
  set PullSurfacesFromGraphicsMesh(value: boolean) { __CPP_ComponentProperty_set(this, 3241658829, value); }
  get Surface(): string { return __CPP_ComponentProperty_get(this, 212870608); }
  set Surface(value: string) { __CPP_ComponentProperty_set(this, 212870608, value); }
}

export class JoltSwingTwistConstraintComponent extends JoltConstraintComponent
{
  public static GetTypeNameHash(): number { return 4229739212; }
  get SwingLimitY(): number { return __CPP_ComponentProperty_get(this, 418801247); }
  set SwingLimitY(value: number) { __CPP_ComponentProperty_set(this, 418801247, value); }
  get SwingLimitZ(): number { return __CPP_ComponentProperty_get(this, 816927894); }
  set SwingLimitZ(value: number) { __CPP_ComponentProperty_set(this, 816927894, value); }
  get Friction(): number { return __CPP_ComponentProperty_get(this, 2332028306); }
  set Friction(value: number) { __CPP_ComponentProperty_set(this, 2332028306, value); }
  get LowerTwistLimit(): number { return __CPP_ComponentProperty_get(this, 1645187251); }
  set LowerTwistLimit(value: number) { __CPP_ComponentProperty_set(this, 1645187251, value); }
  get UpperTwistLimit(): number { return __CPP_ComponentProperty_get(this, 3570289811); }
  set UpperTwistLimit(value: number) { __CPP_ComponentProperty_set(this, 3570289811, value); }
}

export class JoltTriggerComponent extends JoltActorComponent
{
  public static GetTypeNameHash(): number { return 3291379040; }
  get TriggerMessage(): string { return __CPP_ComponentProperty_get(this, 89990298); }
  set TriggerMessage(value: string) { __CPP_ComponentProperty_set(this, 89990298, value); }
}

export class JoltVisColMeshComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2553549493; }
  get CollisionMesh(): string { return __CPP_ComponentProperty_get(this, 1659300445); }
  set CollisionMesh(value: string) { __CPP_ComponentProperty_set(this, 1659300445, value); }
}

export class LineToComponent extends Component
{
  public static GetTypeNameHash(): number { return 30622522; }
  get Target(): string { return __CPP_ComponentProperty_get(this, 2556126530); }
  set Target(value: string) { __CPP_ComponentProperty_set(this, 2556126530, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3935970440); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3935970440, value); }
}

export class MarkerComponent extends Component
{
  public static GetTypeNameHash(): number { return 4188048498; }
  get Marker(): string { return __CPP_ComponentProperty_get(this, 2464147497); }
  set Marker(value: string) { __CPP_ComponentProperty_set(this, 2464147497, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 2732854259); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 2732854259, value); }
}

export class MoveToComponent extends Component
{
  public static GetTypeNameHash(): number { return 1706673799; }
  SetTargetPosition(position: Vec3): void { __CPP_ComponentFunction_Call(this, 2860937428, position); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 2285052201); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 2285052201, value); }
  get TranslationSpeed(): number { return __CPP_ComponentProperty_get(this, 889320036); }
  set TranslationSpeed(value: number) { __CPP_ComponentProperty_set(this, 889320036, value); }
  get TranslationAcceleration(): number { return __CPP_ComponentProperty_get(this, 1580429564); }
  set TranslationAcceleration(value: number) { __CPP_ComponentProperty_set(this, 1580429564, value); }
  get TranslationDeceleration(): number { return __CPP_ComponentProperty_get(this, 2739182340); }
  set TranslationDeceleration(value: number) { __CPP_ComponentProperty_set(this, 2739182340, value); }
}

export class NpcComponent extends Component
{
  public static GetTypeNameHash(): number { return 2955092185; }
}

export class OccluderComponent extends Component
{
  public static GetTypeNameHash(): number { return 661039055; }
  get Extents(): Vec3 { return __CPP_ComponentProperty_get(this, 4199563562); }
  set Extents(value: Vec3) { __CPP_ComponentProperty_set(this, 4199563562, value); }
}

export class PathComponent extends Component
{
  public static GetTypeNameHash(): number { return 1869527729; }
  get Flags(): Flags.PathComponentFlags { return __CPP_ComponentProperty_get(this, 1841421151); }
  set Flags(value: Flags.PathComponentFlags) { __CPP_ComponentProperty_set(this, 1841421151, value); }
  get Closed(): boolean { return __CPP_ComponentProperty_get(this, 2909610872); }
  set Closed(value: boolean) { __CPP_ComponentProperty_set(this, 2909610872, value); }
  get Detail(): number { return __CPP_ComponentProperty_get(this, 1959794179); }
  set Detail(value: number) { __CPP_ComponentProperty_set(this, 1959794179, value); }
}

export class PathNodeComponent extends Component
{
  public static GetTypeNameHash(): number { return 1209101987; }
  get Roll(): number { return __CPP_ComponentProperty_get(this, 4209489507); }
  set Roll(value: number) { __CPP_ComponentProperty_set(this, 4209489507, value); }
  get Tangent1(): Enum.PathNodeTangentMode { return __CPP_ComponentProperty_get(this, 3022242417); }
  set Tangent1(value: Enum.PathNodeTangentMode) { __CPP_ComponentProperty_set(this, 3022242417, value); }
  get Tangent2(): Enum.PathNodeTangentMode { return __CPP_ComponentProperty_get(this, 197788457); }
  set Tangent2(value: Enum.PathNodeTangentMode) { __CPP_ComponentProperty_set(this, 197788457, value); }
}

export class PlayerStartPointComponent extends Component
{
  public static GetTypeNameHash(): number { return 829831518; }
  get PlayerPrefab(): string { return __CPP_ComponentProperty_get(this, 2155164043); }
  set PlayerPrefab(value: string) { __CPP_ComponentProperty_set(this, 2155164043, value); }
}

export class PointLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 2405096860; }
  get Range(): number { return __CPP_ComponentProperty_get(this, 1277890235); }
  set Range(value: number) { __CPP_ComponentProperty_set(this, 1277890235, value); }
}

export class PrefabReferenceComponent extends Component
{
  public static GetTypeNameHash(): number { return 1760872382; }
  get Prefab(): string { return __CPP_ComponentProperty_get(this, 995682263); }
  set Prefab(value: string) { __CPP_ComponentProperty_set(this, 995682263, value); }
}

export class ProjectileComponent extends Component
{
  public static GetTypeNameHash(): number { return 511043200; }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 731315106); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 731315106, value); }
  get GravityMultiplier(): number { return __CPP_ComponentProperty_get(this, 2938609215); }
  set GravityMultiplier(value: number) { __CPP_ComponentProperty_set(this, 2938609215, value); }
  get MaxLifetime(): number { return __CPP_ComponentProperty_get(this, 271485311); }
  set MaxLifetime(value: number) { __CPP_ComponentProperty_set(this, 271485311, value); }
  get OnTimeoutSpawn(): string { return __CPP_ComponentProperty_get(this, 725928292); }
  set OnTimeoutSpawn(value: string) { __CPP_ComponentProperty_set(this, 725928292, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 2703488349); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 2703488349, value); }
  get FallbackSurface(): string { return __CPP_ComponentProperty_get(this, 3268669212); }
  set FallbackSurface(value: string) { __CPP_ComponentProperty_set(this, 3268669212, value); }
}

export class PropertyAnimComponent extends Component
{
  public static GetTypeNameHash(): number { return 1041134685; }
  PlayAnimationRange(RangeLow: number, RangeHigh: number): void { __CPP_ComponentFunction_Call(this, 4205675043, RangeLow, RangeHigh); }
  get Animation(): string { return __CPP_ComponentProperty_get(this, 2849537860); }
  set Animation(value: string) { __CPP_ComponentProperty_set(this, 2849537860, value); }
  get Playing(): boolean { return __CPP_ComponentProperty_get(this, 723600616); }
  set Playing(value: boolean) { __CPP_ComponentProperty_set(this, 723600616, value); }
  get Mode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 2981206458); }
  set Mode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 2981206458, value); }
  get RandomOffset(): number { return __CPP_ComponentProperty_get(this, 2804147396); }
  set RandomOffset(value: number) { __CPP_ComponentProperty_set(this, 2804147396, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 3193568565); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 3193568565, value); }
  get RangeLow(): number { return __CPP_ComponentProperty_get(this, 3101301961); }
  set RangeLow(value: number) { __CPP_ComponentProperty_set(this, 3101301961, value); }
  get RangeHigh(): number { return __CPP_ComponentProperty_get(this, 3151458623); }
  set RangeHigh(value: number) { __CPP_ComponentProperty_set(this, 3151458623, value); }
}

export class RaycastComponent extends Component
{
  public static GetTypeNameHash(): number { return 3279754631; }
  get MaxDistance(): number { return __CPP_ComponentProperty_get(this, 3050911950); }
  set MaxDistance(value: number) { __CPP_ComponentProperty_set(this, 3050911950, value); }
  get DisableTargetObjectOnNoHit(): boolean { return __CPP_ComponentProperty_get(this, 878046809); }
  set DisableTargetObjectOnNoHit(value: boolean) { __CPP_ComponentProperty_set(this, 878046809, value); }
  get RaycastEndObject(): string { return __CPP_ComponentProperty_get(this, 2576721584); }
  set RaycastEndObject(value: string) { __CPP_ComponentProperty_set(this, 2576721584, value); }
  get ForceTargetParentless(): boolean { return __CPP_ComponentProperty_get(this, 2908405694); }
  set ForceTargetParentless(value: boolean) { __CPP_ComponentProperty_set(this, 2908405694, value); }
  get ShapeTypesToHit(): Flags.PhysicsShapeType { return __CPP_ComponentProperty_get(this, 1754294160); }
  set ShapeTypesToHit(value: Flags.PhysicsShapeType) { __CPP_ComponentProperty_set(this, 1754294160, value); }
  get CollisionLayerEndPoint(): number { return __CPP_ComponentProperty_get(this, 3280036410); }
  set CollisionLayerEndPoint(value: number) { __CPP_ComponentProperty_set(this, 3280036410, value); }
  get CollisionLayerTrigger(): number { return __CPP_ComponentProperty_get(this, 3925390422); }
  set CollisionLayerTrigger(value: number) { __CPP_ComponentProperty_set(this, 3925390422, value); }
  get TriggerMessage(): string { return __CPP_ComponentProperty_get(this, 1542197909); }
  set TriggerMessage(value: string) { __CPP_ComponentProperty_set(this, 1542197909, value); }
}

export class RenderTargetActivatorComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 1132834950; }
  get RenderTarget(): string { return __CPP_ComponentProperty_get(this, 1912138533); }
  set RenderTarget(value: string) { __CPP_ComponentProperty_set(this, 1912138533, value); }
}

export class RopeRenderComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 218896672; }
  get Material(): string { return __CPP_ComponentProperty_get(this, 1268662890); }
  set Material(value: string) { __CPP_ComponentProperty_set(this, 1268662890, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1654322528); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1654322528, value); }
  get Thickness(): number { return __CPP_ComponentProperty_get(this, 2390977711); }
  set Thickness(value: number) { __CPP_ComponentProperty_set(this, 2390977711, value); }
  get Detail(): number { return __CPP_ComponentProperty_get(this, 684295973); }
  set Detail(value: number) { __CPP_ComponentProperty_set(this, 684295973, value); }
  get Subdivide(): boolean { return __CPP_ComponentProperty_get(this, 1129566507); }
  set Subdivide(value: boolean) { __CPP_ComponentProperty_set(this, 1129566507, value); }
  get UScale(): number { return __CPP_ComponentProperty_get(this, 1295646594); }
  set UScale(value: number) { __CPP_ComponentProperty_set(this, 1295646594, value); }
}

export class TransformComponent extends Component
{
  public static GetTypeNameHash(): number { return 2384112410; }
  SetDirectionForwards(Forwards: boolean): void { __CPP_ComponentFunction_Call(this, 3917025143, Forwards); }
  IsDirectionForwards(): boolean { return __CPP_ComponentFunction_Call(this, 2067159598); }
  ToggleDirection(): void { __CPP_ComponentFunction_Call(this, 891552429); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 1814501899); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 1814501899, value); }
  get Running(): boolean { return __CPP_ComponentProperty_get(this, 4272456930); }
  set Running(value: boolean) { __CPP_ComponentProperty_set(this, 4272456930, value); }
  get ReverseAtEnd(): boolean { return __CPP_ComponentProperty_get(this, 989143527); }
  set ReverseAtEnd(value: boolean) { __CPP_ComponentProperty_set(this, 989143527, value); }
  get ReverseAtStart(): boolean { return __CPP_ComponentProperty_get(this, 1410751715); }
  set ReverseAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 1410751715, value); }
}

export class RotorComponent extends TransformComponent
{
  public static GetTypeNameHash(): number { return 679292213; }
  get Axis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 1970262483); }
  set Axis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 1970262483, value); }
  get AxisDeviation(): number { return __CPP_ComponentProperty_get(this, 1195328010); }
  set AxisDeviation(value: number) { __CPP_ComponentProperty_set(this, 1195328010, value); }
  get DegreesToRotate(): number { return __CPP_ComponentProperty_get(this, 2628622656); }
  set DegreesToRotate(value: number) { __CPP_ComponentProperty_set(this, 2628622656, value); }
  get Acceleration(): number { return __CPP_ComponentProperty_get(this, 2036991589); }
  set Acceleration(value: number) { __CPP_ComponentProperty_set(this, 2036991589, value); }
  get Deceleration(): number { return __CPP_ComponentProperty_get(this, 1357662261); }
  set Deceleration(value: number) { __CPP_ComponentProperty_set(this, 1357662261, value); }
}

export class SensorComponent extends Component
{
  public static GetTypeNameHash(): number { return 1858244351; }
  get UpdateRate(): Enum.UpdateRate { return __CPP_ComponentProperty_get(this, 1772028060); }
  set UpdateRate(value: Enum.UpdateRate) { __CPP_ComponentProperty_set(this, 1772028060, value); }
  get SpatialCategory(): string { return __CPP_ComponentProperty_get(this, 4268579907); }
  set SpatialCategory(value: string) { __CPP_ComponentProperty_set(this, 4268579907, value); }
  get TestVisibility(): boolean { return __CPP_ComponentProperty_get(this, 2635516262); }
  set TestVisibility(value: boolean) { __CPP_ComponentProperty_set(this, 2635516262, value); }
  get CollisionLayer(): number { return __CPP_ComponentProperty_get(this, 4036316725); }
  set CollisionLayer(value: number) { __CPP_ComponentProperty_set(this, 4036316725, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 2343051683); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 2343051683, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 3443045943); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 3443045943, value); }
}

export class SensorConeComponent extends SensorComponent
{
  public static GetTypeNameHash(): number { return 4089281831; }
  get NearDistance(): number { return __CPP_ComponentProperty_get(this, 1517307786); }
  set NearDistance(value: number) { __CPP_ComponentProperty_set(this, 1517307786, value); }
  get FarDistance(): number { return __CPP_ComponentProperty_get(this, 1320959232); }
  set FarDistance(value: number) { __CPP_ComponentProperty_set(this, 1320959232, value); }
  get Angle(): number { return __CPP_ComponentProperty_get(this, 1260738576); }
  set Angle(value: number) { __CPP_ComponentProperty_set(this, 1260738576, value); }
}

export class SensorCylinderComponent extends SensorComponent
{
  public static GetTypeNameHash(): number { return 2704433667; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 747972466); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 747972466, value); }
  get Height(): number { return __CPP_ComponentProperty_get(this, 391676563); }
  set Height(value: number) { __CPP_ComponentProperty_set(this, 391676563, value); }
}

export class SensorSphereComponent extends SensorComponent
{
  public static GetTypeNameHash(): number { return 1560413378; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 1181724913); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 1181724913, value); }
}

export class ShapeIconComponent extends Component
{
  public static GetTypeNameHash(): number { return 2236683318; }
}

export class SimpleAnimationComponent extends Component
{
  public static GetTypeNameHash(): number { return 557130262; }
  get AnimationClip(): string { return __CPP_ComponentProperty_get(this, 3963944491); }
  set AnimationClip(value: string) { __CPP_ComponentProperty_set(this, 3963944491, value); }
  get AnimationMode(): Enum.PropertyAnimMode { return __CPP_ComponentProperty_get(this, 3454160506); }
  set AnimationMode(value: Enum.PropertyAnimMode) { __CPP_ComponentProperty_set(this, 3454160506, value); }
  get Speed(): number { return __CPP_ComponentProperty_get(this, 1127205222); }
  set Speed(value: number) { __CPP_ComponentProperty_set(this, 1127205222, value); }
  get RootMotionMode(): Enum.RootMotionMode { return __CPP_ComponentProperty_get(this, 2144801343); }
  set RootMotionMode(value: Enum.RootMotionMode) { __CPP_ComponentProperty_set(this, 2144801343, value); }
}

export class SimpleWindComponent extends Component
{
  public static GetTypeNameHash(): number { return 3799437966; }
  get MinWindStrength(): Enum.WindStrength { return __CPP_ComponentProperty_get(this, 695757613); }
  set MinWindStrength(value: Enum.WindStrength) { __CPP_ComponentProperty_set(this, 695757613, value); }
  get MaxWindStrength(): Enum.WindStrength { return __CPP_ComponentProperty_get(this, 2524753881); }
  set MaxWindStrength(value: Enum.WindStrength) { __CPP_ComponentProperty_set(this, 2524753881, value); }
  get MaxDeviation(): number { return __CPP_ComponentProperty_get(this, 3663015566); }
  set MaxDeviation(value: number) { __CPP_ComponentProperty_set(this, 3663015566, value); }
}

export class SkeletonComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2132328886; }
  get Skeleton(): string { return __CPP_ComponentProperty_get(this, 3188199325); }
  set Skeleton(value: string) { __CPP_ComponentProperty_set(this, 3188199325, value); }
  get VisualizeSkeleton(): boolean { return __CPP_ComponentProperty_get(this, 1825340996); }
  set VisualizeSkeleton(value: boolean) { __CPP_ComponentProperty_set(this, 1825340996, value); }
  get VisualizeColliders(): boolean { return __CPP_ComponentProperty_get(this, 1705481802); }
  set VisualizeColliders(value: boolean) { __CPP_ComponentProperty_set(this, 1705481802, value); }
  get VisualizeJoints(): boolean { return __CPP_ComponentProperty_get(this, 2026498741); }
  set VisualizeJoints(value: boolean) { __CPP_ComponentProperty_set(this, 2026498741, value); }
  get VisualizeSwingLimits(): boolean { return __CPP_ComponentProperty_get(this, 1484271753); }
  set VisualizeSwingLimits(value: boolean) { __CPP_ComponentProperty_set(this, 1484271753, value); }
  get VisualizeTwistLimits(): boolean { return __CPP_ComponentProperty_get(this, 1050602218); }
  set VisualizeTwistLimits(value: boolean) { __CPP_ComponentProperty_set(this, 1050602218, value); }
  get BonesToHighlight(): string { return __CPP_ComponentProperty_get(this, 3829890435); }
  set BonesToHighlight(value: string) { __CPP_ComponentProperty_set(this, 3829890435, value); }
}

export class SkeletonPoseComponent extends Component
{
  public static GetTypeNameHash(): number { return 2292298647; }
  get Skeleton(): string { return __CPP_ComponentProperty_get(this, 1859528295); }
  set Skeleton(value: string) { __CPP_ComponentProperty_set(this, 1859528295, value); }
  get Mode(): Enum.SkeletonPoseMode { return __CPP_ComponentProperty_get(this, 890471603); }
  set Mode(value: Enum.SkeletonPoseMode) { __CPP_ComponentProperty_set(this, 890471603, value); }
  get EditBones(): number { return __CPP_ComponentProperty_get(this, 1254753439); }
  set EditBones(value: number) { __CPP_ComponentProperty_set(this, 1254753439, value); }
}

export class SkyBoxComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 2058343587; }
  get CubeMap(): string { return __CPP_ComponentProperty_get(this, 2869699064); }
  set CubeMap(value: string) { __CPP_ComponentProperty_set(this, 2869699064, value); }
  get ExposureBias(): number { return __CPP_ComponentProperty_get(this, 4236020303); }
  set ExposureBias(value: number) { __CPP_ComponentProperty_set(this, 4236020303, value); }
  get InverseTonemap(): boolean { return __CPP_ComponentProperty_get(this, 984736396); }
  set InverseTonemap(value: boolean) { __CPP_ComponentProperty_set(this, 984736396, value); }
  get UseFog(): boolean { return __CPP_ComponentProperty_get(this, 4091356990); }
  set UseFog(value: boolean) { __CPP_ComponentProperty_set(this, 4091356990, value); }
  get VirtualDistance(): number { return __CPP_ComponentProperty_get(this, 1585108500); }
  set VirtualDistance(value: number) { __CPP_ComponentProperty_set(this, 1585108500, value); }
}

export class SkyLightComponent extends SettingsComponent
{
  public static GetTypeNameHash(): number { return 2653409322; }
  get ReflectionProbeMode(): Enum.ReflectionProbeMode { return __CPP_ComponentProperty_get(this, 4009358784); }
  set ReflectionProbeMode(value: Enum.ReflectionProbeMode) { __CPP_ComponentProperty_set(this, 4009358784, value); }
  get CubeMap(): string { return __CPP_ComponentProperty_get(this, 1773946290); }
  set CubeMap(value: string) { __CPP_ComponentProperty_set(this, 1773946290, value); }
  get Intensity(): number { return __CPP_ComponentProperty_get(this, 1547510393); }
  set Intensity(value: number) { __CPP_ComponentProperty_set(this, 1547510393, value); }
  get Saturation(): number { return __CPP_ComponentProperty_get(this, 195723005); }
  set Saturation(value: number) { __CPP_ComponentProperty_set(this, 195723005, value); }
  get NearPlane(): number { return __CPP_ComponentProperty_get(this, 3669626942); }
  set NearPlane(value: number) { __CPP_ComponentProperty_set(this, 3669626942, value); }
  get FarPlane(): number { return __CPP_ComponentProperty_get(this, 1714617720); }
  set FarPlane(value: number) { __CPP_ComponentProperty_set(this, 1714617720, value); }
  get ShowDebugInfo(): boolean { return __CPP_ComponentProperty_get(this, 1548299451); }
  set ShowDebugInfo(value: boolean) { __CPP_ComponentProperty_set(this, 1548299451, value); }
  get ShowMipMaps(): boolean { return __CPP_ComponentProperty_get(this, 2587150324); }
  set ShowMipMaps(value: boolean) { __CPP_ComponentProperty_set(this, 2587150324, value); }
}

export class SliderComponent extends TransformComponent
{
  public static GetTypeNameHash(): number { return 3805456211; }
  get Axis(): Enum.BasisAxis { return __CPP_ComponentProperty_get(this, 43571345); }
  set Axis(value: Enum.BasisAxis) { __CPP_ComponentProperty_set(this, 43571345, value); }
  get Distance(): number { return __CPP_ComponentProperty_get(this, 3852972526); }
  set Distance(value: number) { __CPP_ComponentProperty_set(this, 3852972526, value); }
  get Acceleration(): number { return __CPP_ComponentProperty_get(this, 988599566); }
  set Acceleration(value: number) { __CPP_ComponentProperty_set(this, 988599566, value); }
  get Deceleration(): number { return __CPP_ComponentProperty_get(this, 1121600318); }
  set Deceleration(value: number) { __CPP_ComponentProperty_set(this, 1121600318, value); }
  get RandomStart(): number { return __CPP_ComponentProperty_get(this, 3175675588); }
  set RandomStart(value: number) { __CPP_ComponentProperty_set(this, 3175675588, value); }
}

export class SpatialAnchorComponent extends Component
{
  public static GetTypeNameHash(): number { return 47604678; }
}

export class SpawnComponent extends Component
{
  public static GetTypeNameHash(): number { return 1946889976; }
  CanTriggerManualSpawn(): boolean { return __CPP_ComponentFunction_Call(this, 4216076386); }
  TriggerManualSpawn(IgnoreSpawnDelay: boolean, LocalOffset: Vec3): boolean { return __CPP_ComponentFunction_Call(this, 288929574, IgnoreSpawnDelay, LocalOffset); }
  ScheduleSpawn(): void { __CPP_ComponentFunction_Call(this, 2695461276); }
  get Prefab(): string { return __CPP_ComponentProperty_get(this, 3873413763); }
  set Prefab(value: string) { __CPP_ComponentProperty_set(this, 3873413763, value); }
  get AttachAsChild(): boolean { return __CPP_ComponentProperty_get(this, 1922978851); }
  set AttachAsChild(value: boolean) { __CPP_ComponentProperty_set(this, 1922978851, value); }
  get SpawnAtStart(): boolean { return __CPP_ComponentProperty_get(this, 1609705152); }
  set SpawnAtStart(value: boolean) { __CPP_ComponentProperty_set(this, 1609705152, value); }
  get SpawnContinuously(): boolean { return __CPP_ComponentProperty_get(this, 1983532327); }
  set SpawnContinuously(value: boolean) { __CPP_ComponentProperty_set(this, 1983532327, value); }
  get MinDelay(): number { return __CPP_ComponentProperty_get(this, 2937306170); }
  set MinDelay(value: number) { __CPP_ComponentProperty_set(this, 2937306170, value); }
  get DelayRange(): number { return __CPP_ComponentProperty_get(this, 1604308599); }
  set DelayRange(value: number) { __CPP_ComponentProperty_set(this, 1604308599, value); }
  get Deviation(): number { return __CPP_ComponentProperty_get(this, 4108476436); }
  set Deviation(value: number) { __CPP_ComponentProperty_set(this, 4108476436, value); }
}

export class SphereReflectionProbeComponent extends ReflectionProbeComponentBase
{
  public static GetTypeNameHash(): number { return 3859562955; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 1781982421); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 1781982421, value); }
  get Falloff(): number { return __CPP_ComponentProperty_get(this, 1590315094); }
  set Falloff(value: number) { __CPP_ComponentProperty_set(this, 1590315094, value); }
  get SphereProjection(): boolean { return __CPP_ComponentProperty_get(this, 2621308085); }
  set SphereProjection(value: boolean) { __CPP_ComponentProperty_set(this, 2621308085, value); }
}

export class SpotLightComponent extends LightComponent
{
  public static GetTypeNameHash(): number { return 1331225466; }
  get Range(): number { return __CPP_ComponentProperty_get(this, 3463299609); }
  set Range(value: number) { __CPP_ComponentProperty_set(this, 3463299609, value); }
  get InnerSpotAngle(): number { return __CPP_ComponentProperty_get(this, 2635840731); }
  set InnerSpotAngle(value: number) { __CPP_ComponentProperty_set(this, 2635840731, value); }
  get OuterSpotAngle(): number { return __CPP_ComponentProperty_get(this, 22417569); }
  set OuterSpotAngle(value: number) { __CPP_ComponentProperty_set(this, 22417569, value); }
}

export class SpriteComponent extends RenderComponent
{
  public static GetTypeNameHash(): number { return 216115105; }
  get Texture(): string { return __CPP_ComponentProperty_get(this, 802693315); }
  set Texture(value: string) { __CPP_ComponentProperty_set(this, 802693315, value); }
  get BlendMode(): Enum.SpriteBlendMode { return __CPP_ComponentProperty_get(this, 2307715272); }
  set BlendMode(value: Enum.SpriteBlendMode) { __CPP_ComponentProperty_set(this, 2307715272, value); }
  get Color(): Color { return __CPP_ComponentProperty_get(this, 1400941869); }
  set Color(value: Color) { __CPP_ComponentProperty_set(this, 1400941869, value); }
  get Size(): number { return __CPP_ComponentProperty_get(this, 605120887); }
  set Size(value: number) { __CPP_ComponentProperty_set(this, 605120887, value); }
  get MaxScreenSize(): number { return __CPP_ComponentProperty_get(this, 1476439856); }
  set MaxScreenSize(value: number) { __CPP_ComponentProperty_set(this, 1476439856, value); }
  get AspectRatio(): number { return __CPP_ComponentProperty_get(this, 3997797566); }
  set AspectRatio(value: number) { __CPP_ComponentProperty_set(this, 3997797566, value); }
}

export class StageSpaceComponent extends Component
{
  public static GetTypeNameHash(): number { return 3027569480; }
  get StageSpace(): Enum.XRStageSpace { return __CPP_ComponentProperty_get(this, 3034831660); }
  set StageSpace(value: Enum.XRStageSpace) { __CPP_ComponentProperty_set(this, 3034831660, value); }
}

export class StateMachineComponent extends Component
{
  public static GetTypeNameHash(): number { return 697969528; }
  SetState(Name: string): boolean { return __CPP_ComponentFunction_Call(this, 706380209, Name); }
  get Resource(): string { return __CPP_ComponentProperty_get(this, 4234531166); }
  set Resource(value: string) { __CPP_ComponentProperty_set(this, 4234531166, value); }
  get InitialState(): string { return __CPP_ComponentProperty_get(this, 529813136); }
  set InitialState(value: string) { __CPP_ComponentProperty_set(this, 529813136, value); }
  get BlackboardName(): string { return __CPP_ComponentProperty_get(this, 2812395598); }
  set BlackboardName(value: string) { __CPP_ComponentProperty_set(this, 2812395598, value); }
}

export class TimedDeathComponent extends Component
{
  public static GetTypeNameHash(): number { return 777546224; }
  get MinDelay(): number { return __CPP_ComponentProperty_get(this, 2844717004); }
  set MinDelay(value: number) { __CPP_ComponentProperty_set(this, 2844717004, value); }
  get DelayRange(): number { return __CPP_ComponentProperty_get(this, 2107028594); }
  set DelayRange(value: number) { __CPP_ComponentProperty_set(this, 2107028594, value); }
  get TimeoutPrefab(): string { return __CPP_ComponentProperty_get(this, 2588373656); }
  set TimeoutPrefab(value: string) { __CPP_ComponentProperty_set(this, 2588373656, value); }
}

export class TriggerDelayModifierComponent extends Component
{
  public static GetTypeNameHash(): number { return 431216843; }
  get ActivationDelay(): number { return __CPP_ComponentProperty_get(this, 1248944490); }
  set ActivationDelay(value: number) { __CPP_ComponentProperty_set(this, 1248944490, value); }
  get DeactivationDelay(): number { return __CPP_ComponentProperty_get(this, 2962286289); }
  set DeactivationDelay(value: number) { __CPP_ComponentProperty_set(this, 2962286289, value); }
}

export class VisualScriptComponent extends EventMessageHandlerComponent
{
  public static GetTypeNameHash(): number { return 2847623380; }
  get Script(): string { return __CPP_ComponentProperty_get(this, 3480592533); }
  set Script(value: string) { __CPP_ComponentProperty_set(this, 3480592533, value); }
}

export class VisualizeHandComponent extends Component
{
  public static GetTypeNameHash(): number { return 318110124; }
}

export class WindVolumeComponent extends Component
{
  public static GetTypeNameHash(): number { return 4201762611; }
  get Strength(): Enum.WindStrength { return __CPP_ComponentProperty_get(this, 3351812691); }
  set Strength(value: Enum.WindStrength) { __CPP_ComponentProperty_set(this, 3351812691, value); }
  get ReverseDirection(): boolean { return __CPP_ComponentProperty_get(this, 1910203208); }
  set ReverseDirection(value: boolean) { __CPP_ComponentProperty_set(this, 1910203208, value); }
  get BurstDuration(): number { return __CPP_ComponentProperty_get(this, 3382524886); }
  set BurstDuration(value: number) { __CPP_ComponentProperty_set(this, 3382524886, value); }
  get OnFinishedAction(): Enum.OnComponentFinishedAction { return __CPP_ComponentProperty_get(this, 478327081); }
  set OnFinishedAction(value: Enum.OnComponentFinishedAction) { __CPP_ComponentProperty_set(this, 478327081, value); }
}

export class WindVolumeConeComponent extends WindVolumeComponent
{
  public static GetTypeNameHash(): number { return 1742364937; }
  get Angle(): number { return __CPP_ComponentProperty_get(this, 3343685365); }
  set Angle(value: number) { __CPP_ComponentProperty_set(this, 3343685365, value); }
  get Length(): number { return __CPP_ComponentProperty_get(this, 1823972462); }
  set Length(value: number) { __CPP_ComponentProperty_set(this, 1823972462, value); }
}

export class WindVolumeCylinderComponent extends WindVolumeComponent
{
  public static GetTypeNameHash(): number { return 2414158611; }
  get Length(): number { return __CPP_ComponentProperty_get(this, 3140746105); }
  set Length(value: number) { __CPP_ComponentProperty_set(this, 3140746105, value); }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 1921898711); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 1921898711, value); }
  get Mode(): Enum.WindVolumeCylinderMode { return __CPP_ComponentProperty_get(this, 1901442664); }
  set Mode(value: Enum.WindVolumeCylinderMode) { __CPP_ComponentProperty_set(this, 1901442664, value); }
}

export class WindVolumeSphereComponent extends WindVolumeComponent
{
  public static GetTypeNameHash(): number { return 121255542; }
  get Radius(): number { return __CPP_ComponentProperty_get(this, 3909000093); }
  set Radius(value: number) { __CPP_ComponentProperty_set(this, 3909000093, value); }
}

