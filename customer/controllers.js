const Customer = require("./model");

// GET all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const { name, gender, location, device } = req.query;

    const filter = {};
    if (name) filter.Name = { $regex: name, $options: "i" };
    if (gender) filter.gender = gender;
    if (location) filter.Location_Type = location;
    if (device) filter.Brand_Device = device;

    const page = parseInt(req.query.page) || 1; // default: page 1
    const limit = parseInt(req.query.limit) || 10; // default: 10 per page
    const skip = (page - 1) * limit;

    const [customers, total] = await Promise.all([
      Customer.find(filter).skip(skip).limit(limit),
      Customer.countDocuments(filter),
    ]);

    res.json({
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalData: total,
      data: customers,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET gender summary
exports.getGenderSummary = async (req, res) => {
  try {
    const summary = await Customer.aggregate([
      { $group: { _id: "$gender", count: { $sum: 1 } } },
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDeviceSummary = async (req, res) => {
  try {
    const summary = await Customer.aggregate([
      { $group: { _id: "$Brand_Device", count: { $sum: 1 } } },
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLocationSummary = async (req, res) => {
  try {
    const summary = await Customer.aggregate([
      { $group: { _id: "$Location_Type", count: { $sum: 1 } } },
    ]);
    res.json(summary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
