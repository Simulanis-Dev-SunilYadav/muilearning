import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

const MUIDateTimeRangePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ width: 300, marginTop: 5 }}>
        <DatePicker
          label="Date Picker"
          value={selectedDate}
          onChange={setSelectedDate}
          slots={{ textField: TextField }}
          enableAccessibleFieldDOMStructure={false}
        />
        <TimePicker
          label="Time Picker"
          value={selectedTime}
          onChange={setSelectedTime}
          slots={{ textField: TextField }}
          enableAccessibleFieldDOMStructure={false}
        />
        <DateTimePicker
          label="Date Time Picker"
          value={selectedTime}
          onChange={setSelectedTime}
          slots={{ textField: TextField }}
          enableAccessibleFieldDOMStructure={false}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default MUIDateTimeRangePicker;
