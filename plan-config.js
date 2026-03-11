// ============================================================
// プラン定義
// ============================================================
var PLAN_CONFIG = {
  light: {
    name: "ライト",
    price: 1980,
    autoMsgLimit: 30,
    shareImage: false,
    monthlyReport: false,
    dedicatedSupport: false
  },
  standard: {
    name: "スタンダード",
    price: 2980,
    autoMsgLimit: Infinity,
    shareImage: true,
    monthlyReport: false,
    dedicatedSupport: false
  },
  premium: {
    name: "プレミアム",
    price: 4980,
    autoMsgLimit: Infinity,
    shareImage: true,
    monthlyReport: true,
    dedicatedSupport: true
  }
};

// どのプランで解放されるか（ロックUI表示用）
var FEATURE_UNLOCK = {
  shareImage: "standard",
  monthlyReport: "premium",
  dedicatedSupport: "premium"
};

function isFeatureAvailable(currentPlan, featureKey) {
  var cfg = PLAN_CONFIG[currentPlan];
  if (!cfg) return false;
  return !!cfg[featureKey];
}

function getUnlockPlanName(featureKey) {
  var planId = FEATURE_UNLOCK[featureKey];
  return planId ? PLAN_CONFIG[planId].name : "";
}
