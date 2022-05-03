// Play (ads)
export const play = (
  ctx,
  node,
  parameter,
  min,
  max,
  attack,
  decay,
  sustain
) => {
  const now = ctx.currentTime;
  node[parameter].cancelScheduledValues(now);
  node[parameter].setValueAtTime(min, now);
  node[parameter].linearRampToValueAtTime(max, now + attack);
  node[parameter].linearRampToValueAtTime(
    min + (max - min) * sustain,
    now + attack + decay
  );
};

// Stop (r)
export const stop = (ctx, node, parameter, min, release) => {
  const now = ctx.currentTime;
  node[parameter].cancelAndHoldAtTime(now);
  node[parameter].setTargetAtTime(min, now, release / 4);
  node[parameter].setValueAtTime(min, now + release + 0.5);
};
