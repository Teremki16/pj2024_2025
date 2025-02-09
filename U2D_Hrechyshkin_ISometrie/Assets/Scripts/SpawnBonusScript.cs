using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class SpawnBonusScript : MonoBehaviour
{
    public int score = 0;
    [SerializeField] TextMeshProUGUI scoreText;

    [SerializeField] GameObject coin;

    private void Update()
    {
        scoreText.SetText("Score :" + score.ToString());
    }

    IEnumerator spawn()
    {
        while (true)
        {
            Vector2 bottom_left = Camera.main.
               ViewportToWorldPoint(new Vector2(0, 0));
            Vector2 top_right = Camera.main.
                ViewportToWorldPoint(new Vector2(1, 1));

            float x = Random.Range(bottom_left.x, top_right.x);
            float y = Random.Range(bottom_left.y, top_right.y);

            Instantiate(coin, new Vector3(x, y, -1), Quaternion.identity);
            yield return new WaitForSecondsRealtime(1f);
        }
    }

    private void Start()
    {
        StartCoroutine(nameof(spawn));
    }
}
