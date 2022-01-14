package github.chartapp.rest;

import github.chartapp.models.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController {

    public DataController() {

    }

    @GetMapping()
    public List<Data> getAnswers(@RequestParam(value = "filter1", required = false) String filter1,
                                 @RequestParam(value = "filter1", required = false) String filter2) {
        return null;
    }



}
