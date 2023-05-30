import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Configuration, Tournament, TournamentApi } from "@/client";

const InputTournament = () => {
  const schema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    phone: yup.string().required(),
    startDate: yup.string().required(),
    endDate: yup.string().required(),
  });
  const form = useForm<Tournament>({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const {
    register,
    formState: { errors },
  } = form;

  //   const handleSubmit = async () => {
  //     const conf = new Configuration();
  //     const client = new TournamentApi(conf);
  //     client.createOrUpdateTournament();
  //   };
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              reprehenderit ut temporibus libero eligendi nisi laborum ullam
              ducimus facilis beatae, sint quisquam ratione porro recusandae
              impedit repudiandae sit, earum ipsum illum soluta eum dolorem
              quidem labore.
            </p>

            <div className="mt-8">
              <a
                href="/tournament/list"
                className="text-2xl font-bold text-pink-600"
              >
                View all tournaments
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4">
              <div>
                <label className="sr-only" for="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="opacity-75 ml-3" for="date">
                    Start
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Start of tournament"
                    type="date"
                    id="startDate"
                  />
                </div>

                <div>
                  <label className="opacity-75 ml-3" for="date">
                    End
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="End of tournament"
                    type="date"
                    id="endDate"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" for="description">
                  Description
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Description"
                  rows="8"
                  id="description"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-white hover:text-black "
                >
                  Create Tournament
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InputTournament;
