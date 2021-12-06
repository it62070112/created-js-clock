function does_this_when_webpage_loaded() {

    const date_time = new Date();
    const array_of_formatted_date_time = []
    array_of_formatted_date_time.push(date_time.getDay());
    array_of_formatted_date_time.push(((date_time.getDate() + 100) + '').substring(1, 3));
    array_of_formatted_date_time.push(date_time.getMonth());
    array_of_formatted_date_time.push(date_time.getFullYear());
    array_of_formatted_date_time.push(((date_time.getHours() + 100) + '').substring(1, 3));
    array_of_formatted_date_time.push(((date_time.getMinutes() + 100) + '').substring(1, 3));
    array_of_formatted_date_time.push(((date_time.getSeconds() + 100) + '').substring(1, 3));
    let array_of_day_in_week = [
        "SUN", "MON", "TUE",
        "WED", "THU",
        "FRI", "SAT"
    ];
    let array_of_month_in_year = [
        "JAN", "FEB", "MAR", "APR",
        "MAY", "JUN", "JUL", "AUG",
        "SEP", "OCT", "NOV", "DEC"
    ]

    // document
    //     .getElementById('clock_section')
    //     .innerHTML = JSON.stringify(array_of_formatted_date_time);
    document
        .getElementById('value_of_day_in_week')
        .innerHTML = array_of_day_in_week[array_of_formatted_date_time[0]] + ", ";
    document
        .getElementById('value_of_date_in_month')
        .innerHTML = array_of_formatted_date_time[1] + " ";
    document
        .getElementById('value_of_month_in_year')
        .innerHTML = array_of_month_in_year[array_of_formatted_date_time[2]] + " ";
    document
        .getElementById('value_of_year')
        .innerHTML = array_of_formatted_date_time[3];
    // document
    //     .getElementById('value_of_hour')
    //     .innerHTML = array_of_formatted_date_time[4];
    // document
    //     .getElementById('value_of_minute')
    //     .innerHTML = array_of_formatted_date_time[5];
    // document
    //     .getElementById('value_of_second')
    //     .innerHTML = array_of_formatted_date_time[6];

    // flip clock section: hour, digit #1
    document
        .getElementById('text_hour_digit_1')
        // .innerHTML = (parseInt(array_of_formatted_date_time[4][0]) + 1) % 6;
        .innerHTML = array_of_formatted_date_time[4][0];
    document
        .getElementById('lower_text_hour_digit_1')
        .innerHTML = array_of_formatted_date_time[4][0];

    // flip clock section: hour, digit #2
    document
        .getElementById('text_hour_digit_2')
        // .innerHTML = (parseInt(array_of_formatted_date_time[4][1]) + 1) % 10;
        .innerHTML = array_of_formatted_date_time[4][1];
    document
        .getElementById('lower_text_hour_digit_2')
        .innerHTML = array_of_formatted_date_time[4][1];

    // flip clock section: minute, digit #1
    document
        .getElementById('text_minute_digit_1')
        // .innerHTML = (parseInt(array_of_formatted_date_time[5][0]) + 1) % 6;
        .innerHTML = array_of_formatted_date_time[5][0];
    document
        .getElementById('lower_text_minute_digit_1')
        .innerHTML = array_of_formatted_date_time[5][0];

    // flip clock section: minute, digit #2
    document
        .getElementById('text_minute_digit_2')
        // .innerHTML = (parseInt(array_of_formatted_date_time[5][1]) + 1) % 10;
        .innerHTML = array_of_formatted_date_time[5][1];
    document
        .getElementById('lower_text_minute_digit_2')
        .innerHTML = array_of_formatted_date_time[5][1];

    // flip clock section: second, digit #1
    document
        .getElementById('text_second_digit_1')
        // .innerHTML = (parseInt(array_of_formatted_date_time[6][0]) + 1) % 6;
        .innerHTML = array_of_formatted_date_time[6][0];
    document
        .getElementById('lower_text_second_digit_1')
        .innerHTML = array_of_formatted_date_time[6][0];

    // flip clock section: second, digit #2
    document
        .getElementById('text_second_digit_2')
        // .innerHTML = (parseInt(array_of_formatted_date_time[6][1]) + 1) % 10;
        .innerHTML = array_of_formatted_date_time[6][1];
    document
        .getElementById('lower_text_second_digit_2')
        .innerHTML = array_of_formatted_date_time[6][1];
    
    setTimeout(() => {
        does_this_when_webpage_loaded()
    }, 1000);

}