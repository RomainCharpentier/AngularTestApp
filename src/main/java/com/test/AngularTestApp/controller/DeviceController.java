package com.test.AngularTestApp.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.test.AngularTestApp.Links;
import com.test.AngularTestApp.model.Device;
import com.test.AngularTestApp.model.User;
import com.test.AngularTestApp.service.DeviceService;
import com.test.AngularTestApp.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/")
public class DeviceController {
	
    @Autowired
    DeviceService deviceService;
	
    @GetMapping(path = Links.DEVICE_LIST)
    public ResponseEntity<?> getDevices() throws InterruptedException, ExecutionException {
        List<Device> resource = deviceService.getDevices();
        return ResponseEntity.ok(resource);
    }
	
	@PostMapping(path = Links.DEVICE_ADD)
	public ResponseEntity<?> saveDevice(@RequestBody Device user) throws InterruptedException, ExecutionException {
        Device resource = deviceService.saveDevice(user);
        return ResponseEntity.ok(resource);
    }
}
