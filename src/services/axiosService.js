import axios from "axios";
import {baseURL} from "../config";

let axiosService = axios.create({baseURL});

export {axiosService}
