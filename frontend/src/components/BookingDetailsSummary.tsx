import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Thông Tin Chi Tiết</h2>
      <div className="border-b py-2">
        Địa điểm khách sạn
        <div className="font-bold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className="flex justify-between">
        <div>
          Ngày check-in
          <div className="font-bold"> {checkIn.toDateString()}</div>
        </div>
        <div>
          Ngày check-out
          <div className="font-bold"> {checkOut.toDateString()}</div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Số đêm ở lại
        <div className="font-bold">{numberOfNights} đêm </div>
      </div>

      <div>
        Số lượng khách{" "}
        <div className="font-bold">
          {adultCount} người lớn & {childCount} trẻ em
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;
