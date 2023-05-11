import csv
from datetime import datetime
import tkinter as tk
from tkinter import filedialog
import matplotlib.pyplot as plt


def plot_temperatures():
    # Get the selected date range from the GUI
    start_date = datetime.strptime(start_date_entry.get(), '%Y-%m-%d')
    end_date = datetime.strptime(end_date_entry.get(), '%Y-%m-%d')

    # Read the temperature data from the CSV file specified in the file dialog
    file_path = filedialog.askopenfilename()
    temperatures = []
    with open(file_path, newline='') as file:
        reader = csv.reader(file)
        next(reader)  # Skip the header row
        for row in reader:
            date = datetime.strptime(row[0], '%Y-%m-%d')
            temperature = float(row[1])
            temperatures.append((date, temperature))

    # Filter the temperature data for the selected date range
    selected_temperatures = [(date, temperature) for date, temperature in temperatures if start_date <= date <= end_date]

    # Extract the dates and temperatures for plotting
    dates = [date for date, temperature in selected_temperatures]
    temperatures = [temperature for date, temperature in selected_temperatures]

    # Create a line plot of the temperature data
    plt.plot(dates, temperatures)
    plt.xlabel('Date')
    plt.ylabel('Temperature (C)')
    plt.show()


# Create the main window
window = tk.Tk()
window.title('Temperature Plotter')

# Create the date range selection widgets
start_date_label = tk.Label(window, text='Start Date (YYYY-MM-DD):')
start_date_label.grid(row=0, column=0, padx=5, pady=5)

start_date_entry = tk.Entry(window)
start_date_entry.grid(row=0, column=1, padx=5, pady=5)

end_date_label = tk.Label(window, text='End Date (YYYY-MM-DD):')
end_date_label.grid(row=1, column=0, padx=5, pady=5)

end_date_entry = tk.Entry(window)
end_date_entry.grid(row=1, column=1, padx=5, pady=5)

# Create the plot button
plot_button = tk.Button(window, text='Plot', command=plot_temperatures)
plot_button.grid(row=2, column=0, columnspan=2, padx=5, pady=5)

# Start the main event loop
window.mainloop()
