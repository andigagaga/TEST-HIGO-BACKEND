const express = require("express");
const router = express.Router();
const { getAllCustomers, getGenderSummary } = require("./controllers");

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

module.exports = router;
