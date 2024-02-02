export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"columns-1 md-columns-2"}>
        <section className={"space-y-2"}>
          <p>
            Sovereign Engine is a 2.5D MMORPG engine with the 2D graphical style
            of classic RPGs together with a 3D voxel-based world. The world is
            highly dynamic and allows developers and players alike the ability
            to build homes, mine for resources, farm the land, and delve into
            dungeons. Currently in early development, Sovereign will make it
            easy to create and share multiplayer RPGs.
          </p>
          <p>
            Sovereign is developed in C#, runs on Windows and Linux, and is easy
            to extend through its distributed Entity-Component-System (ECS)
            framework.
          </p>
          <p>Sovereign Engine is made available under the GPLv3 license.</p>
        </section>
      </div>
    </main>
  );
}
