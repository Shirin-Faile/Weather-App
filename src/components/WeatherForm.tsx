import React, { useState } from "react";
import { TextField, Button, Box, FormHelperText } from "@mui/material";

interface WeatherFormProps {
    onCitySubmit: (city: string) => void;
}

const WeatherForm = ({ onCitySubmit }: WeatherFormProps) => {
    const [city, setCity] = useState('');
    const [error, setError] = useState<string | null>(null);

    const isValidCity = (city: string) => /^[a-zA-Z\s]+$/.test(city);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (isValidCity(city)) {
            setError(null);
            onCitySubmit(city);
        } else {
            setError('City name must contain only letters.');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
            <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
            sx={{ mr: 2 }}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
            <Button type="submit" variant="contained" color="primary">
                Get Weather
            </Button>
        </Box>
    );
}

export default WeatherForm;

function setError(arg0: null) {
    throw new Error("Function not implemented.");
}
