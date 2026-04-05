Add-Type -AssemblyName System.Drawing

$width = 1600
$height = 2000
$bitmap = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$graphics.Clear([System.Drawing.Color]::FromArgb(38, 70, 83))

$rect = New-Object System.Drawing.Rectangle 0,0,$width,$height
$gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, [System.Drawing.Color]::FromArgb(31,56,68), [System.Drawing.Color]::FromArgb(22,39,47), 90)
$graphics.FillRectangle($gradient, $rect)

$warmBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(36, 244, 162, 97))
$goldBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(22, 233, 196, 106))
$graphics.FillEllipse($warmBrush, -120, -100, 620, 620)
$graphics.FillEllipse($goldBrush, 930, 80, 520, 520)

$linePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(28, 255, 255, 255), 1)
for ($x = 80; $x -lt $width; $x += 96) {
    $graphics.DrawLine($linePen, $x, 0, $x, $height)
}
for ($y = 140; $y -lt $height; $y += 96) {
    $graphics.DrawLine($linePen, 0, $y, $width, $y)
}

$accentPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(244,162,97), 4)
$thinAccentPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(233,196,106), 2)
$whitePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(70, 255, 255, 255), 1)

$graphics.DrawRectangle($accentPen, 108, 246, 338, 200)
$graphics.DrawRectangle($accentPen, 496, 246, 338, 200)
$graphics.DrawRectangle($thinAccentPen, 884, 246, 338, 200)
$graphics.DrawRectangle($whitePen, 108, 540, 1114, 928)
$graphics.DrawRectangle($whitePen, 1260, 246, 220, 1222)

$blockBrush1 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(231,111,81))
$blockBrush2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244,162,97))
$blockBrush3 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233,196,106))
$graphics.FillRectangle($blockBrush1, 112, 250, 330, 192)
$graphics.FillRectangle($blockBrush2, 500, 250, 330, 192)
$graphics.FillRectangle($blockBrush3, 888, 250, 330, 192)

$titleFont = New-Object System.Drawing.Font('Georgia', 44, [System.Drawing.FontStyle]::Bold)
$heroFont = New-Object System.Drawing.Font('Georgia', 84, [System.Drawing.FontStyle]::Bold)
$labelFont = New-Object System.Drawing.Font('Segoe UI', 16, [System.Drawing.FontStyle]::Regular)
$smallFont = New-Object System.Drawing.Font('Segoe UI', 13, [System.Drawing.FontStyle]::Regular)
$indexFont = New-Object System.Drawing.Font('Segoe UI', 11, [System.Drawing.FontStyle]::Bold)

$coralText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(244,162,97))
$goldText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233,196,106))
$paperText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(245,239,228))
$mutedText = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(199, 224, 215, 197))

$graphics.DrawString('Boulevard Ember', $titleFont, $coralText, 108, 96)
$graphics.DrawString('late light mapped with precision', $labelFont, $goldText, 112, 168)
$graphics.DrawString('FIELD STUDY 04', $indexFont, $mutedText, 1268, 96)
$graphics.DrawString('A movement of measured warmth, architectural quiet, and painstaking refinement.', $labelFont, $mutedText, 108, 486)

$graphics.DrawString('AFTER', $heroFont, $paperText, 108, 622)
$graphics.DrawString('LIGHT', $heroFont, $paperText, 108, 730)
$graphics.DrawString('SYSTEM', $heroFont, $paperText, 108, 892)

$graphics.DrawString('signal bands', $smallFont, $goldText, 108, 458)
$graphics.DrawString('coral index', $smallFont, $coralText, 500, 458)
$graphics.DrawString('sand register', $smallFont, $goldText, 888, 458)

for ($i = 0; $i -lt 9; $i++) {
    $y = 1100 + ($i * 46)
    $graphics.DrawLine($thinAccentPen, 150, $y, 1180, $y)
    $graphics.DrawString(('R{0:D2}' -f ($i + 1)), $smallFont, $mutedText, 1268, $y - 10)
}

$graphics.DrawString('warmth as data / restraint as structure', $labelFont, $mutedText, 108, 1528)
$graphics.DrawString('Every interval resolved. Every edge deliberate. Every tone meticulously crafted.', $labelFont, $paperText, 108, 1572)
$graphics.DrawString('crafted object for dusk-oriented systems', $smallFont, $goldText, 108, 1844)
$graphics.DrawString('02 / 10', $smallFont, $goldText, 1400, 1906)

$bitmap.Save('e:\pratish-portfolio\.worktrees\recruiter-portfolio-redesign\public\sunset-boulevard-canvas.png', [System.Drawing.Imaging.ImageFormat]::Png)

$gradient.Dispose()
$warmBrush.Dispose()
$goldBrush.Dispose()
$linePen.Dispose()
$accentPen.Dispose()
$thinAccentPen.Dispose()
$whitePen.Dispose()
$blockBrush1.Dispose()
$blockBrush2.Dispose()
$blockBrush3.Dispose()
$titleFont.Dispose()
$heroFont.Dispose()
$labelFont.Dispose()
$smallFont.Dispose()
$indexFont.Dispose()
$coralText.Dispose()
$goldText.Dispose()
$paperText.Dispose()
$mutedText.Dispose()
$graphics.Dispose()
$bitmap.Dispose()
