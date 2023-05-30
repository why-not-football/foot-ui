import { Booking, BookingApi, Configuration, EnableBooking } from "@/client";
import InputField from "@/components/InputField";
import React, { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Create() {
  const schema = yup.object({
    owner: yup.string().required(),
    phone: yup.number().min(10)
  });
  const form = useForm<Booking>({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  useEffect(()=>{
    console.log(errors)
  }, [errors])

  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  let minTime = useMemo(() => {
    let date = new Date(startDate);
    date?.setHours(7);
    date?.setMinutes(0);
    date?.setSeconds(0);
    return date ? date : undefined;
  }, [startDate]);
  let maxTime = useMemo(() => {
    let date = new Date(startDate);
    date?.setHours(19);
    date?.setMinutes(59);
    date?.setSeconds(0);
    return date ? date : undefined;
  }, [startDate]);

  const onSubmit = (elt: Booking) => {
    elt.createdAt=(new Date).toISOString()
    elt.owner=elt.owner
    elt.startDatetime = startDate.toISOString();
    elt.endDatetime = endDate.toISOString();
    elt.phone=elt.phone
    elt.paying="CASH"
    elt.status= "COMING_SOON" as EnableBooking
    const conf = new Configuration()
    const client = new BookingApi(conf)
    client.createBooking(elt)
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Fill in the reservation form
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            id="your-name"
            label="Your name"
            inputComplement={{ ...register("owner") }}
            error={(errors.owner?.message && "Your name is required")}
          />
          <InputField
            type="number"
            placeholder="034 89 184 52"
            id="phone-number"
            label="Your phone"
            error={(errors.phone?.message && "Phone is required and be valid")}
            inputComplement={{...register("phone")}}
            startItem={
              <>
                <span className="fi fi-mg"></span>
              </>
            }
          />
          <div className="mt-4 flex">
            <div className="mr-2">
              <label
                htmlFor="start-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Start date
              </label>
              <DatePicker
                selected={startDate}
                onSelect={() => {}}
                onChange={(e) => {
                  setStartDate(e as Date);
                }}
                showTimeSelect
                dateFormat="dd-MM-yyyy hh:mm aa"
                minTime={minTime}
                maxTime={maxTime}
                minDate={new Date()}
                className="mt-2 pl-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="start-date"
              />
            </div>
            <div>
              <label
                htmlFor="end-date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                End date
              </label>
              <DatePicker
                selected={endDate}
                onSelect={() => {}}
                onChange={(e) => {
                  setEndDate(e as Date);
                }}
                showTimeSelect
                dateFormat="dd-MM-yyyy hh:mm aa"
                minTime={minTime}
                maxTime={maxTime}
                minDate={new Date()}
                className="mt-2 pl-6 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="end-date"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
}
