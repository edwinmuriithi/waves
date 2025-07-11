import { section } from "framer-motion/client";

const TakeAction = () => {
  return (
    <section>
      <div className="flex gap-16 p-10 items-center">
        <img
          src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Crab-WaterBottle-PierNirandara-Advocacy-ActionAlert-1200x1800.png?v=1751045521000"
          alt="Crab in Water Bottle"
          style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
          className="hover:scale-95"
        />
        <div className="flex flex-col gap-7 hover:scale-105">
          <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
          <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
          <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
          <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
        </div>
      </div>
      <div className="flex mr-6 ml-6 justify-center">

      <div className="flex flex-col gap-4 p-6 items-center">
        <img
          src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/SeaLion-DylanDehaas-Advocacy-ActionAlert-1200x1800.png?v=1750080473000"
          alt="Crab in Water Bottle"
          style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '15px' }}
          className=""
        />
        <div className="flex flex-col gap-4">
          <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
          <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
          <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
          <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
        </div>

      </div>  

        <div className="flex flex-col gap-4 p-6  items-center">
          <img
            src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Alert_122x1800_OceanImageBank_GrantThomas.jpg?v=1746032961000"
            alt="Crab in Water Bottle"
            style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '15px' }}
            className=""
          />
          <div className="flex  flex-col gap-4">
            <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
            <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
            <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
            <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
          </div>
        </div>  

        <div className="flex flex-col gap-4 p-6  items-center">
            <img
              src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/OceanImageBank_LewisBurnett_08.jpg?v=1722543579000"
              alt="Crab in Water Bottle"
              style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '15px' }}
              className=""
            />
            <div className="flex flex-col gap-4">
              <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
              <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
              <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
              <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
            </div>
          </div>
          </div>
              <div className="relative w-[90%] mx-auto font-bold text-3xl text-blue-900">
                <select
                  className="appearance-none border-none rounded-2xl px-4 py-4 bg-blue-200 w-full h-16 m-8 pr-10 text-gray-700"
                  defaultValue=""
                  onChange={(e) => console.log("Selected:", e.target.value)}
                >
                  <option value="" disabled className="font-bold text-3xl text-blue-900">
                    Filter
                  </option>
                  <option value="Biodiversity">Biodiversity</option>
                  <option value="Climate">Climate</option>
                  <option value="Plastic">Plastic</option>
                </select>

                {/* Custom dropdown icon */}
                <div className="pointer-events-none absolute top-12 right-2 text-gray-500">
                  ▼
                </div>
              </div>
              <section>
                  <div className="flex gap-16 p-10 items-center">
                    <img
                     src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Crab-WaterBottle-PierNirandara-Advocacy-ActionAlert-1200x1800.png?v=1751045521000"

                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/SeaLion-DylanDehaas-Advocacy-ActionAlert-1200x1800.png?v=1750080473000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Alert_122x1800_OceanImageBank_GrantThomas.jpg?v=1746032961000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/OceanImageBank_LewisBurnett_08.jpg?v=1722543579000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/HawaiianGreenSeaTurtle-ShaneMyers-Shutterstock-Advocacy-ActionAlert-1200x1800.jpg?v=1712682436000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/OceanImageBank_TomVierus_03.jpg?v=1731093444000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/DeepwaterHorizon-USNavy-MassCommunicationSpecialistSecondClassJustin-Stumberg-Released-Advocacy-ActionAlert-1200x1800.jpg?v=1697736076000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/HelpOutKelp_Advocacy_ActionAlert_12001800_OceanImageBank_HannesKlostermann.jpg?v=1743534531000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Nick+Chill_flickr_Foam-2.jpg?v=1726178047000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/OilDrums_OceanImageBank_JillHeinerth_v2.jpg?v=1742230581000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
                        <div className="flex gap-16 p-10 items-center">
                    <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/Alert_Paris_Advocacy_Credit_NOAA_PIFSC_HMSRP.jpg?v=1740682043000"
                      alt="Crab in Water Bottle"
                      style={{ width: '500px', height: '450px', objectFit: 'cover', borderRadius: '15px' }}
                      className="hover:scale-95"
                    />
                    <div className="flex flex-col gap-7 hover:scale-105">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 text-4xl hover:underline hover:decoration-green-700">Take Action for Plastic Free <br /> July</h1>
                      <p>Call on Congress to phase out harmful, wasteful single- <br />use plastic products. </p>
                      <button className="bg-amber-500 hover:bg-blue-900 text-2xl font-bold w-fit text-gray-700 hover:text-gray-200 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
                  </div>
              </section>
              <section className="flex gap-4 bg-amber-800">
                <div>
                   <img
                      src="https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1991/HawaiianGreenSeaTurtle-ShaneMyers-Shutterstock-Advocacy-ActionAlert-1200x1800.jpg?v=1712682436000"
                      alt="Crab in Water Bottle"
                      style={{ width: '650px', height: '500px', objectFit: 'cover'}}
                      className=""
                    />
                </div>
                    <div className="flex flex-col gap-7 justify-center m-8 ">
                      <span className="bg-gray-700 text-white font-serif font-bold font-stretch-50% p-1 pr-2 pl-2 w-fit rounded hover:scale-105">Plastic</span>
                      <h1 className="font-bold font-serif font-stretch-75% text-blue-900 bg-amber-600 text-4xl hover:underline hover:decoration-green-700">Safeguard the <br /> Endangered Species <br /> Act</h1>
                      <p className="">Call on your elected officials to protect the <br />Endangered Species Act and safeguard <br /> endangered and threatened animals and their <br /> habitats before it’s too late.</p>
                      <button className="bg-blue-900 hover:bg-blue-800 text-2xl font-bold w-fit text-gray-200 hover:text-gray-300 pr-3 pl-3 rounded-2xl p-2">Take Action</button>
                    </div>
              </section>


    </section>
  )
};

export default TakeAction;
