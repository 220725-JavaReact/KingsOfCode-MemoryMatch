package com.koc.MemoryMatch.utils;

import java.io.File;
import java.io.FileWriter;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Properties;

public class Logger {
	// Create the instance of Logger
	private static Logger single_instance_of_logger = null;

	// Create the private constructor to prevent from creating the object
	private Logger() {
	}

	// Create the method that will return the same object every time it is called
	public static Logger getInstance() {
		if (single_instance_of_logger == null)
			// Create the object
			single_instance_of_logger = new Logger();
		return single_instance_of_logger;
	}

	public static void log(LogLevel level, String mess) {
		Util util = new Util(level, mess);
		writeToFile(util.toString());
	}

	private static void writeToFile(String message) {
		// Get the path to the log file
		File userDir = new File(System.getProperty("user.dir"));
		File logFile= new File(userDir , "src/main/resources/MemoryMatch.log");
		try (FileWriter write = new FileWriter(logFile,	true)) {
			write.append(message);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Utility class to create the string for writeToFile method (String toString()
	// is overridden)
	private static class Util {
		LogLevel logLevel;
		String formattedDateTime;
		String message;

		public Util(LogLevel loglevel, String message) {
			super();
			this.logLevel = loglevel;
			this.message = message;

			DateTimeFormatter format = DateTimeFormatter.ofPattern("dd.MM.yyyy_HH:mm:ss");
			LocalDateTime dateTime = LocalDateTime.now();
			this.formattedDateTime = dateTime.format(format);
		}

		@Override
		public String toString() {
			return formattedDateTime + " " + logLevel + " " + message + "\n";
		}
	}

	public enum LogLevel {
		info, debug, verbose, warning, fatal, error
	}

}
