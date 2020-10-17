package com.test.AngularTestApp.service;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Component;

import com.test.AngularTestApp.model.Device;
import com.test.AngularTestApp.repository.DeviceRepository;

@Component
public class DeviceService {
	
	private DeviceRepository deviceRepository;
	
	public DeviceService(DeviceRepository deviceRepository) {
		this.deviceRepository = deviceRepository;
	}

	public List<Device> getDevices() throws InterruptedException, ExecutionException {
		return deviceRepository.findAll();
	}

	public Device saveDevice(Device device) throws InterruptedException, ExecutionException {
		return deviceRepository.save(device);
	}

}
