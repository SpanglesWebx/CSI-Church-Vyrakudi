

// //Util/FamilyId.sj

const Counter = require("../Schema/CounterSchema");

// REAL GENERATION
async function generateFamilyCode(session) {
  const counter = await Counter.findByIdAndUpdate(
    { _id: "familyId" },
    { $inc: { seq: 1 } },
    { new: true, upsert: true, session }
  );

  const number = counter.seq;
  return `VKDFAM${String(number).padStart(5, "0")}`;
}

// PREVIEW ONLY
async function previewFamilyCode() {
  const counter = await Counter.findById("familyId");

  const next = (counter?.seq || 0) + 1;

  return `VKDFAM${String(next).padStart(5, "0")}`;
}

module.exports = {
  generateFamilyCode,
  previewFamilyCode
};




