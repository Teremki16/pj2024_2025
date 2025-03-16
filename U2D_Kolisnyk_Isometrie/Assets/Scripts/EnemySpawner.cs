using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    [SerializeField] GameObject enemi;
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(spawner());
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    IEnumerator spawner()
    {
        while (true)
        {
            Instantiate(enemi, transform.position, Quaternion.identity);
            float delay = Random.Range(1, 5);
            yield return new WaitForSeconds(delay);
        }
    }
}
