package github.chartapp.rest;

import github.chartapp.models.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {

    public DataController() {

    }

    @GetMapping()
    public List<Data> getAnswers(@RequestParam(value = "filter1", required = false) String filter1,
                                 @RequestParam(value = "filter1", required = false) String filter2) {
        if (filter1 != null) {
            return List.of(
                    new Data(0, 90, "Class 1",LocalDate.of(2022, 1, 12)),
                    new Data(0, 90, "Class 2",LocalDate.of(2022, 1, 13)),
                    new Data(0, 90, "Class 3",LocalDate.of(2022, 1, 15)),
                    new Data(0, 90, "Class 4",LocalDate.of(2022, 1, 14)),
                    new Data(0, 90, "Class 5",LocalDate.of(2022, 1, 19))
                    );
        }

        if (filter2 != null) {
            return List.of(
                    new Data(0, 90, "Group 1",LocalDate.of(2022, 1, 12)),
                    new Data(0, 90, "Group 2",LocalDate.of(2022, 2, 13)),
                    new Data(0, 90, "Group 3",LocalDate.of(2022, 3, 14)),
                    new Data(0, 90, "Group 4",LocalDate.of(2022, 4, 15)),
                    new Data(0, 90, "Group 5",LocalDate.of(2022, 5, 16))
                    );
        }

        return null;
    }

}
