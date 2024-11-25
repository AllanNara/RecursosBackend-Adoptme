import EErrors from "../services/errors/enums.js";

export default function(error, req, res, next) {
    console.error(error.cause || error);
    const status = {
        [EErrors.ROUTING_ERROR]: 404,
        [EErrors.INVALID_TYPES_ERROR]: 400,
        [EErrors.INVALID_PARAM]: 400,
        [EErrors.DATABASE_ERROR]: 500
    }[error.code] || 500;

    return res.status(status).send({ status: "error", error: error.name || "Unhandled error" });
}
