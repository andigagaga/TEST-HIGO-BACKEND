const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  getGenderSummary,
  getDeviceSummary,
  getLocationSummary,
} = require("./controllers");

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: API untuk data customer
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Ambil semua data customer (bisa dengan filter)
 *     tags: [Customers]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Cari berdasarkan nama (contains, case-insensitive)
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *         description: Filter berdasarkan gender
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         description: Filter berdasarkan Location_Type
 *       - in: query
 *         name: device
 *         schema:
 *           type: string
 *         description: Filter berdasarkan Brand_Device
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Nomor halaman (default 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Jumlah data per halaman (default 10)
 *     responses:
 *       200:
 *         description: Data customer yang difilter
 */

router.get("/", getAllCustomers);

/**
 * @swagger
 * /api/customers/gender-summary:
 *   get:
 *     summary: Ringkasan jumlah customer berdasarkan gender
 *     responses:
 *       200:
 *         description: Berhasil mengambil summary gender
 */
router.get("/gender-summary", getGenderSummary);

/**
 * @swagger
 * /api/customers/location-summary:
 *   get:
 *     summary: Ringkasan jumlah customer berdasarkan location type
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Berhasil mengambil summary lokasi
 */
router.get("/device-summary", getDeviceSummary);

/**
 * @swagger
 * /api/customers/{id}/print:
 *   get:
 *     summary: Cetak PDF untuk satu customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID customer
 *     responses:
 *       200:
 *         description: Berhasil menghasilkan PDF
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Customer tidak ditemukan
 */
router.get("/location-summary", getLocationSummary);
module.exports = router;
